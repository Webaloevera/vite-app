import React, { useEffect, useState } from 'react'
import {Card} from '../components';
import PropTypes from 'prop-types';
import '../styles/products.css'
import axios from "axios";
const Product = () => {

   
    const [data, setData] = useState([])

    useEffect(() => {
     const getData = async () => {
       await axios
         .get("http://localhost:3001/products/")
         .then((res) => {
           const store = res.data;
           setData(store);
         })
         .catch((err) => {
           alert(err);
         });
     };
     getData();
   }, []);

    useEffect(() => {
        document.title = "Product Page";
     }, []);
     
    return (
        <div className="product__wrapper">
            <h1>Product Page</h1>
            {/* <Filters/> */}
            <div className="cards">
            {(data || []).map((item) => <Card id={item._id} image={item.image} name={item.name} breed={item.breed} key={item._id}/>)}
            </div>
        </div>
    )
}

Product.propTypes = {
    store: PropTypes.array
  };

export default Product;
