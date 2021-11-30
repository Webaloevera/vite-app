import React, { useState, useEffect, useRef} from "react";
import {Card} from '../components';
import '../styles/createpanel.css'
import axios from "axios";

const CreatePanel = () => {

    const formRef = useRef(0);


    const [newCards, setNewCards] = useState([]);
    useEffect(() => {     
        const getData = async () => {  
          await axios.get('http://localhost:3001/products/')  
          .then(res => { 
            const allCards = res.data;
            setNewCards(allCards);
          })  
          .catch(err => {  
            alert(err)  
          });  
        }  
        getData()   
      }, [])


    const [openAddCard, setDescOpenAddCard] = useState(false);
    const [isEdit, setisEdit] = useState(false);
    const [name, setName] = useState('');
    const [breed, setBreed] = useState('');
    const [image, setImage] = useState('');
    




    function newAdd(state){
        setDescOpenAddCard(state)
      }


    function submitHandler(event) {
        event.preventDefault()

        if(name.trim() && breed.trim() && image.trim()) {
            const newProduct = {
                name,
                breed,
                image
            }
            
            const arrs = [...newCards, newProduct];
            setNewCards(arrs)
                axios({
                    method: isEdit ? 'put' : 'post',
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                    },
                    url: 'http://localhost:3001/products' + ( isEdit ? '/'+ isEdit : ''),
                    data: newProduct
                    })
                    .then((r) => {
                    console.log(r);
                })
                .catch((e) => {
                    console.log(e)
                });

                setName('')
                setBreed('')
                setImage('') 
                setisEdit(false)     
        }
    }
    
const deleteCard = id => {
    axios({
        method: 'delete',
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        url: 'http://localhost:3001/products/' + id,
     })
    .then(() => {
        setNewCards(newCards.filter(function(item) {
            return item._id !== id
        }));
        alert('deleted');
    })
    .catch((e) => {
        alert(e);
    });
}

const setInput = (item) => {
    setName(item.name);
    setBreed(item.breed);
    setImage(item.image);
    setisEdit(item._id)
    console.log(isEdit)
}


    return (
            <div className="creator">
                <div  className="creator__list-panel">
                        <button onClick={newAdd}>Add Cards</button>
                </div>
                {openAddCard && 
                <div className="creator-cards">
                <div className="creator__cards">
                        <form onSubmit={ submitHandler } ref={formRef} encType="multipart/form-data">
                        <div className="input">
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" value={name} onChange={event => setName(event.target.value)} />
                        </div>
                        <div className="input">
                        <label htmlFor="breed">Text:</label>
                        <input type="text" name="breed" value={breed} onChange={event => setBreed(event.target.value)} />
                        </div>
                        <div className="input">
                        <label htmlFor="image">Image Link:</label>
                        <input type="text" name="image" value={image} onChange={event => setImage(event.target.value)}/>
                        </div>
                        <input type="submit" value="Create" />
                        </form>
                </div>
                <div className="creator-list">         
                {
                    newCards.map((item) => <div key={item._id} >
                        <Card image={item.image} name={item.name} breed={item.breed} key={item._id}/>
                        <div className="creator__editing-panel">
                            <button onClick={() => deleteCard(item._id)}>delete</button>
                            <button onClick={() => setInput(item, formRef.current.children)}>editing</button>
                            </div>
                        </div>)
                }
                </div>
                </div>}
            </div>
    )
  }

export default CreatePanel;