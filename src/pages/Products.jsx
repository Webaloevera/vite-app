import React, { useEffect } from 'react'
import {Card, Filters} from '../components';
import PropTypes from 'prop-types';
import '../styles/products.css'

const Product = ({store}) => {

    useEffect(() => {
        document.title = "Product Page";
     }, []);
     
    return (
        <div className="product__wrapper">
            <h1>Product Page</h1>
            {/* <Filters/> */}
            <div className="cards">
            {(store || []).map((item) => <Card id={item._id} image={item.image} name={item.name} breed={item.breed} key={item._id}/>)}
            </div>
        </div>
    )
}

Product.propTypes = {
    store: PropTypes.array
  };

export default Product;
