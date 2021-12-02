import React, { useEffect, useState } from "react";
import ProductForm from "../components/ProductForm/ProductForm";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/EditProductPage.css";

function EditProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState("");

  useEffect(() => {
    const getProduct = async () => {
      await axios
        .get(`http://localhost:3001/products/${id}/edit`)
        .then((res) => {
          const card = res.data;
          setProduct(card);
        })
        .catch((err) => {
          alert(err);
        });
    };
    getProduct();
  }, []);

  const editProduct = async (editProduct) => {
    await axios({
      method: "put",
      url: `http://localhost:3001/products/${id}`,
      data: editProduct,
    })
      .then(() => {
        navigate(`/products`);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="create__product">
      <h2>Product form</h2>
      <ProductForm
        product={product}
        onFormSubmit={editProduct}
        submitText="Edit"
      />
    </div>
  );
}

export default EditProductPage;
