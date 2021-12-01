import React, { useState, useEffect, useCallback } from "react";
import ThemedInput from "../ThemedInput";
// import { Card } from "..";

// import "../styles/createProducts.css";

const defaultProductValues = {
  name: "",
  breed: "",
  image: "",
  phone: "",
  price: "",
  address: "",
  desc: "",
  country: "",
  color: "",
};

const labels = {
  name: "Name",
  breed: "Breed",
  image: "Image URL",
  phone: "Phone",
  price: "Price",
  address: "Address",
  desc: "Description",
  country: "Country",
  color: "Color",
};

const ProductForm = ({ product, onFormSubmit }) => {
  const [productState, setProductState] = useState(defaultProductValues);

  useEffect(() => {
    if (!product) {
      return;
    }
    setProductState(product);
  }, [product]);

  const handleFormInputChange = useCallback(
    (event) => {
      setProductState({
        ...productState,
        [event.target.name]: event.target.value,
      });
    },
    [productState, setProductState]
  );

  const handleFormSubmit = useCallback(
    (event) => {
      event.preventDefault();
      onFormSubmit(productState);
    },
    [onFormSubmit, productState]
  );

  return (
    <form className="form-create-edit" onSubmit={handleFormSubmit}>
      {Object.keys(productState).map((key) => (
        <ThemedInput
          key={key}
          name={key}
          label={labels[key]}
          type="text"
          value={productState[key]}
          onChange={handleFormInputChange}
        />
      ))}
      <input type="submit" value="Create" />
    </form>
  );
};

export default ProductForm;
