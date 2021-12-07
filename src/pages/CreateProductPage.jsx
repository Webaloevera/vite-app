import React, { useCallback } from "react";
import ProductForm from "../components/ProductForm";
import { useNavigate } from "react-router-dom";
import "../styles/createProductPage.css";
import { createProduct } from "../redux/productSlice";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";

function CreateProductPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onCreateProduct = useCallback((newProduct) => {
    dispatch(createProduct(newProduct))
      .then(unwrapResult)
      .then((result) => {
        navigate(`/product/${result._id}`);
      });
  }, []);

  return (
    <div className="create__product">
      <h2>Product form</h2>
      <ProductForm onFormSubmit={onCreateProduct} submitText="Create" />
    </div>
  );
}

export default CreateProductPage;
