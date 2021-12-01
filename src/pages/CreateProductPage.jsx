import React from "react";
import ProductForm from "../components/ProductForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/createProductPage.css";

function CreateProductPage() {

const navigate = useNavigate();
    
const redirect = (str) => {
        navigate(str);
      };

  const addProduct = async (item) => {
    await axios({
      method: "post",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      url: "http://localhost:3001/products",
      data: item,
    })
      .then((e) => {
        redirect(`/product/${e.data}`)
        console.log(e.data)
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="create__product">
      <h2>Product form</h2>
      <ProductForm onFormSubmit={addProduct} />
    </div>
  );
}

export default CreateProductPage;
