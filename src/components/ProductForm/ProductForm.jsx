import React, { useState, useEffect, useCallback } from "react";
import ThemedInput from "../ThemedInput";

// import PropTypes from "prop-types";

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

const ProductForm = ({ product, onFormSubmit, submitText }) => {
  const [productState, setProductState] = useState(defaultProductValues);
  const [emptyErorForm, setEmptyErorForm] = useState(false);

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
      const lengthForm = Object.values(productState).filter((item) => item);
      if (lengthForm.length < 9) {
        setEmptyErorForm(true);
        setTimeout(() => {
          setEmptyErorForm(false);
        }, 2000);
      } else {
        onFormSubmit(productState);
      }
    },
    [onFormSubmit, productState]
  );

  return (
    <form className="form-create-edit" onSubmit={handleFormSubmit}>
      {Object.keys(productState)
        .filter((key) => {
          return key !== "_id" && key !== "__v";
        })
        .map((key) => {
          return (
            <ThemedInput
              key={key}
              name={key}
              label={labels[key]}
              type="text"
              value={productState[key]}
              onChange={handleFormInputChange}
            />
          );
        })}
      <input type="submit" value={submitText} />
      {emptyErorForm && <p>Заполните все поля!</p>}
    </form>
  );
};

// ProductForm.propTypes = {
//   product: PropTypes.object,
//   onFormSubmit: PropTypes.func,
//   submitText: PropTypes.string
// };

export default ProductForm;
