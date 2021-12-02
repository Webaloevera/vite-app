import React from "react";
import ProductForm from "../components/ProductForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/createProductPage.css";

function CreateProductPage() {
  const navigate = useNavigate();

  const addProduct = async (newProduct) => {
    await axios({
      method: "post",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      url: "http://localhost:3001/products",
      data: newProduct,
    })
      .then((e) => {
        navigate(`/product/${e.data}`);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="create__product">
      <h2>Product form</h2>
      <ProductForm submitText='Create' onFormSubmit={addProduct} />
    </div>
  );
}

export default CreateProductPage;
