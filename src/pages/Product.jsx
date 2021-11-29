import React, { useEffect } from 'react'
import {Card} from '../components';
import PropTypes from 'prop-types';
import '../styles/product.css'

const Product = ({store}) => {

    useEffect(() => {
        document.title = "Product Page";
     }, []);
     
    return (
        <div className="product__wrapper">
            <h1>Product Page</h1>
            <div className="cards">
            {(store || []).map((item) => <Card id={item.id} image={item.image} name={item.name} breed={item.breed} key={item.id}/>)}
            </div>
        </div>
    )
}

Product.propTypes = {
    store: PropTypes.array
  };

export default Product;
