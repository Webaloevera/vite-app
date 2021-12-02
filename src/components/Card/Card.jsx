import React, { useEffect } from "react";
import { ImagePreloader } from "../../components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import axios from "axios";
import "./card.css";

const Card = (props) => {
  const deleteCard = (id) => {
    axios({
      method: "delete",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      url: "http://localhost:3001/products/" + id,
    })
      .then(() => {})
      .catch((e) => {
        alert(e);
      });
  };

  return (
    <div className="card">
      <Link to={`/product/${props.id}`}>
        <ImagePreloader
          width="300px"
          height="200px"
          src={props.image}
          alt={props.breed}
        />
        <div className="card__text">
          <p>{props.name}</p>
          <p>{props.breed}</p>
        </div>
      </Link>
      <div className="card-link">
        <Link to={`/products/${props.id}/edit/`}>Edit</Link>
        <button onClick={() => deleteCard(props.id)}>Delete</button>
      </div>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  breed: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Card;
