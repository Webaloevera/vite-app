import React, { useEffect } from 'react'
import {Card} from '../components';
import '../styles/product.scss'

const Product = (props) => {

    useEffect(() => {
        document.title = "Product Page";
     }, []);

    return (
        <div className="product__wrapper">
            <h1>Product Page</h1>
            <div className="cards">
            {(props.store || []).map((item) => <Card items={item} key={item.id}/>)}
            </div>
        </div>
    )
}


export default Product;
