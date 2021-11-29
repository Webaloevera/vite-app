import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import {Card} from './components';
import PropTypes from 'prop-types'


const ProductPost = () => {

    const [cardId, setCardId] = useState();

    let  { id } = useParams();
    
    useEffect(() => {     
    const getPost = async () => {  
      await axios.get(`http://localhost:3001/products/${id}`)  
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
  

//   console.log(cardId)

if (cardId)
    return (

        <div>
            <Card image={cardId.image} name={cardId.name} breed={cardId.breed} key={cardId.id}/>
        </div>
    )
    else {
        return ('');
    }
  }

  ProductPost.propTypes = {
      id: PropTypes.object
  }


export default ProductPost;