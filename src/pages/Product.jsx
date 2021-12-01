import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import {Card} from '../components';
import PropTypes from 'prop-types';
import '../styles/product.css';

const Product = () => {

    const [cardId, setCardId] = useState();

    let  { id } = useParams();
    
    useEffect(() => {     
    const getPost = () => {  
      axios.get(`http://localhost:3001/product/${id}`)  
      .then(res => { 
        const card = res.data;
        setCardId(card)
      })  
      .catch(err => {  
        alert(err)  
      });  
    }  
    getPost()   
  }, [])

if (cardId)
    return (

        <div className="product">
            <Card id={id} image={cardId.image} name={cardId.name} breed={cardId.breed} key={cardId.id}/>
        </div>
    )
    else {
        return ('Not found...');
    }
  }

  Product.propTypes = {
      id: PropTypes.object
  }


export default Product;