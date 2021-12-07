import React, { useEffect } from "react";
import { Card } from "../components";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../redux/productSlice";
import "../styles/products.css";

const Product = () => {
  const products = useSelector((state) => state.products.list);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    document.title = "Product Page";
  }, []);

  return (
    <div className="product__wrapper">
      <h1>Product Page</h1>
      {/* <Filters/> */}
      <div className="cards">
        {(products || []).map((item) => (
          <Card
            id={item._id}
            image={item.image}
            name={item.name}
            breed={item.breed}
            key={item._id}
          />
        ))}
      </div>
    </div>
  );
};

Product.propTypes = {
  products: PropTypes.array,
};

export default Product;
