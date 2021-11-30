import React, {useState, useEffect, useRef } from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import "../styles/createProducts.css"

const ProductEdit = () => {


    const [cardId, setCardId] = useState();

    let  { id } = useParams();
    
    useEffect(() => {     
    const getPost = () => {  
      axios.get(`http://localhost:3001/product/${id}`)  
      .then(res => { 
        const card = res.data;
        setCardId(card)
        console.log(card)
      })  
      .catch(err => {  
        alert(err)  
      });  
    }  
    getPost()   
  }, [])


    const formRef = useRef(0);

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


    const submitEdit = event => {
        event.preventDefault()
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
    event.preventDefault()
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

    return (
                    <div className="creator">
                    {
                    <div className="creator-cards">
                    <div className="create-edit__cards">
                        <form onSubmit={ submitEdit } ref={formRef} encType="multipart/form-data">
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
                        <input type="submit" value="Edite" />
                        </form>
                </div>
                {/* <div className="creator-list">         
                    {
                cardId.map((item) => 
                        <div key={item._id}>
                            <Card id={item._id} image={item.image} name={item.name} alt={item.breed} breed={item.breed}/>
                            <div className="creator__editing-panel">
                                <button onClick={() => deleteCard(item._id)}>delete</button>
                                <button onClick={() => setInput(item, formRef.current.children)}>editing</button>
                            </div>
                        </div>)
                    }
                </div> */}
        </div>
                    
                    }
                </div>
    );
};

export default ProductEdit;