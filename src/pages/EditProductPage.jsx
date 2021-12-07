import React, { useEffect, useState } from "react";
import ProductForm from "../components/ProductForm/ProductForm";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getByIdEdit, editProduct, fetchProducts } from "../redux/productSlice";
import { unwrapResult } from "@reduxjs/toolkit";

function EditProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState("");
  const dispatch = useDispatch();

  
  useEffect(() => {
    const getProduct = (id) => {
      dispatch(getByIdEdit(id))
        .then(unwrapResult)
        .then((result) => {
          setProduct(result);
          dispatch(fetchProducts());
        });
    };
    getProduct(id);
  }, []);

  const onEditProduct = (item) => {
    dispatch(editProduct(item))
      .then(() => {
        navigate(`/products`);
      });
  };

  return (
    <div className="create__product">
      <h2>Product form</h2>
      <ProductForm
        product={product}
        onFormSubmit={onEditProduct}
        submitText="Edit"
      />
    </div>
  );
}

export default EditProductPage;
