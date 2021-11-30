import React, { useState, useEffect, useRef} from "react";
import axios from "axios";
import {Card} from '../components';
import '../styles/createProducts.css';


const CreateProducts = () => {

    const formRef = useRef(0);
    const [newCards, setNewCards] = useState([]);

    const getData = () => {  
        axios.get('http://localhost:3001/products/')  
       .then(res => { 
         const allCards = res.data;
         setNewCards(allCards);
       })  
       .catch(err => {  
         alert(err)  
       });  
     }  

    useEffect(() => {    
        getData()   
      }, []);

 
    const [isEdit, setisEdit] = useState(false);
    const [name, setName] = useState('');
    const [breed, setBreed] = useState('');
    const [image, setImage] = useState('');
    const [phone, setPhone] = useState('');
    const [price, setPrice] = useState('');
    const [address, setAddress] = useState('');
    const [desc, setDesc] = useState('');
    const [country, setCountry] = useState('');
    const [color, setColor] = useState('');

    
   const submitHandler = (event) => {
    event.preventDefault()

        if(isEdit) submitEdit(event);
        else submitCreate(event);
   }

   function submitCreate(event) {
    event.preventDefault()
    if(name.trim() && breed.trim() && image.trim()) {
        const newProduct = {
            name,
            breed,
            image,
            phone,
            price,
            address,
            desc,
            country,
            color
        };

        const arrs = [...newCards, newProduct];
        setNewCards(arrs)

            axios({
                method: 'post',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                },
                url: 'http://localhost:3001/products',
                data: newProduct
                })
                .then((r) => {
            })
            .catch((e) => {
                console.log(e)
            });

            setName('');
            setBreed('');
            setImage('');
            setPhone('');
            setPrice('');
            setAddress('');
            setDesc('');
            setCountry('');
            setColor('');
            setisEdit(false) 
            getData()      
    }
};

      const submitEdit = event => {
                axios({
                    method: 'put',
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                    },
                    url: 'http://localhost:3001/products/' + isEdit,
                    data: { 
                                name,
                                breed,
                                image,
                                phone,
                                price,
                                address,
                                desc,
                                country,
                                color
                    }
                })
                .then(() => {
                    getData();
                })
                .catch((e) => {
                    console.log(e)
                });

                setName('');
                setBreed('');
                setImage('');
                setPhone('');
                setPrice('');
                setAddress('');
                setDesc('');
                setCountry('');
                setColor('');
                setisEdit(false);

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
};

const setInput = (item) => {
    setName(item.name);
    setBreed(item.breed);
    setImage(item.image);
    setisEdit(item._id);
    setPhone(item.phone);
    setPrice(item.color);
    setAddress(item.price);
    setDesc(item.address);
    setCountry(item.desc);
    setColor(item.country);
};


    return (
            <div className="creator">
                {
                <div className="creator-cards">
                <div className="create-edit__cards">
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
                        <div className="input">
                        <label htmlFor="color">Color:</label>
                        <input type="text" name="color" value={color} onChange={event => setColor(event.target.value)}/>
                        </div>
                        <div className="input">
                        <label htmlFor="country">Country:</label>
                        <input type="text" name="country" value={country} onChange={event => setCountry(event.target.value)}/>
                        </div>
                        <div className="input">
                        <label htmlFor="address">Address:</label>
                        <input type="text" name="address" value={address} onChange={event => setAddress(event.target.value)}/>
                        </div>
                        <div className="input">
                        <label htmlFor="price">Price:</label>
                        <input type="text" name="price" value={price} onChange={event => setPrice(event.target.value)}/>
                        </div>
                        <div className="input">
                        <label htmlFor="phone">Phone:</label>
                        <input type="text" name="phone" value={phone} onChange={event => setPhone(event.target.value)}/>
                        </div>
                        <div className="input">
                        <label htmlFor="desc">Description:</label>
                        <input type="text" name="desc" value={desc} onChange={event => setDesc(event.target.value)}/>
                        </div>
                        <input type="submit" value="Create" />
                        </form>
                </div>
                <div className="creator-list">         
                {

                    newCards.map((item) => 
                    <div key={item._id}>
                        <Card id={item._id} image={item.image} name={item.name} alt={item.breed} breed={item.breed}/>
                        <div className="creator__editing-panel">
                            <button onClick={() => deleteCard(item._id)}>delete</button>
                            <button onClick={() => setInput(item, formRef.current.children)}>editing</button>
                        </div>
                    </div>)
                }
                </div>
                </div>
                
                }
            </div>
    )
  }

export default CreateProducts;