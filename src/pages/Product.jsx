import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "../components";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getByIdProduct,
  deleteProduct,
  fetchProducts,
} from "../store/productSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import { Link } from "react-router-dom";
import "../styles/product.css";

const Product = () => {
  const [cardId, setCardId] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let { id } = useParams();

  const onDeleteProduct = async (id) => {
    await dispatch(deleteProduct(id)).then(() => {
      navigate("/products");
    });
  };

  useEffect(() => {
    dispatch(getByIdProduct(id))
      .then(unwrapResult)
      .then((result) => {
        setCardId(result);
        dispatch(fetchProducts());
      });
  }, []);

  if (cardId)
    return (
      <div className="product">
        <Card
          id={id}
          image={cardId.image}
          name={""}
          breed={""}
          key={cardId.id}
        />
        <div className="product-list">
          <ul>
            <li>
              <p>Name:</p>
              <p>{cardId.name}</p>
            </li>
            <li>
              <p>Breed:</p>
              <p>{cardId.breed}</p>
            </li>
            <li>
              <p>Color:</p>
              <p>{cardId.color}</p>
            </li>
            <li>
              <p>Image:</p>
              <p>{cardId.image}</p>
            </li>
            <li>
              <p>Country:</p>
              <p>{cardId.country}</p>
            </li>
            <li>
              <p>Price</p>
              <p>{cardId.price}</p>
            </li>
            <li>
              <p>Description</p>
              <p>{cardId.desc}</p>
            </li>
            <li>
              <p>Phone</p>
              <p>{cardId.phone}</p>
            </li>
            <li>
              <p></p>
              <p></p>
            </li>
          </ul>
        </div>
        <div className="card-link">
          <Link to={`/products/${id}/edit/`}>Edit</Link>
          <button onClick={() => onDeleteProduct(id)}>Delete</button>
        </div>
      </div>
    );
  else {
    return "Not found...";
  }
};

Product.propTypes = {
  id: PropTypes.object,
};

export default Product;
