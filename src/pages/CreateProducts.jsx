import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Card } from "../components";
// import "../styles/createProducts.css";

const CreateProducts = () => {
  const [newCards, setNewCards] = useState([]);
  const navigate = useNavigate();

  const redirect = (str) => {
    navigate(str);
  };

  const getData = () => {
    axios
      .get("http://localhost:3001/products/")
      .then((res) => {
        const allCards = res.data;
        setNewCards(allCards);
      })
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [image, setImage] = useState("");
  const [phone, setPhone] = useState("");
  const [price, setPrice] = useState("");
  const [address, setAddress] = useState("");
  const [desc, setDesc] = useState("");
  const [country, setCountry] = useState("");
  const [color, setColor] = useState("");

  function submitCreate(event) {
    event.preventDefault();
    if (name.trim() && breed.trim() && image.trim()) {
      const newProduct = {
        name,
        breed,
        image,
        phone,
        price,
        address,
        desc,
        country,
        color,
      };

      const arrs = [...newCards, newProduct];
      setNewCards(arrs);

      axios({
        method: "post",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        url: "http://localhost:3001/products",
        data: newProduct,
      })
        .then(() => {})
        .catch((e) => {
          console.log(e);
        });
      clearInput();
      getData();
      redirect(`/products/`);
    }
  }

  const clearInput = () => {
    setName("");
    setBreed("");
    setImage("");
    setPhone("");
    setPrice("");
    setAddress("");
    setDesc("");
    setCountry("");
    setColor("");
  };
  return (
    <div className="creator">
      {
        <div className="creator-cards">
          <div className="create-edit__cards">
            <form onSubmit={submitCreate} encType="multipart/form-data">
              <div className="input">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
              <div className="input">
                <label htmlFor="breed">Text:</label>
                <input
                  type="text"
                  name="breed"
                  value={breed}
                  onChange={(event) => setBreed(event.target.value)}
                />
              </div>
              <div className="input">
                <label htmlFor="image">Image Link:</label>
                <input
                  type="text"
                  name="image"
                  value={image}
                  onChange={(event) => setImage(event.target.value)}
                />
              </div>
              <div className="input">
                <label htmlFor="color">Color:</label>
                <input
                  type="text"
                  name="color"
                  value={color}
                  onChange={(event) => setColor(event.target.value)}
                />
              </div>
              <div className="input">
                <label htmlFor="country">Country:</label>
                <input
                  type="text"
                  name="country"
                  value={country}
                  onChange={(event) => setCountry(event.target.value)}
                />
              </div>
              <div className="input">
                <label htmlFor="address">Address:</label>
                <input
                  type="text"
                  name="address"
                  value={address}
                  onChange={(event) => setAddress(event.target.value)}
                />
              </div>
              <div className="input">
                <label htmlFor="price">Price:</label>
                <input
                  type="text"
                  name="price"
                  value={price}
                  onChange={(event) => setPrice(event.target.value)}
                />
              </div>
              <div className="input">
                <label htmlFor="phone">Phone:</label>
                <input
                  type="text"
                  name="phone"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                />
              </div>
              <div className="input">
                <label htmlFor="desc">Description:</label>
                <input
                  type="text"
                  name="desc"
                  value={desc}
                  onChange={(event) => setDesc(event.target.value)}
                />
              </div>
              <input type="submit" value="Create" />
            </form>
          </div>
          <div className="creator-list">
            {newCards &&
              newCards.map((item) => (
                <div key={item._id}>
                  <Card
                    id={item._id}
                    image={item.image}
                    name={item.name}
                    alt={item.breed}
                    breed={item.breed}
                  />
                </div>
              ))}
          </div>
        </div>
      }
    </div>
  );
};

export default CreateProducts;
