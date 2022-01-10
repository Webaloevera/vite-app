import React from "react";
import { ImagePreloader } from "../../components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./card.css";

const Card = ({id, image, breed, name}) => {

  return (
    <div className="card">
      <Link to={`/product/${id}`}>
        <ImagePreloader
          width="300px"
          height="200px"
          imageURL={image}
          alt={breed}
        />
        <div className="card__text">
          <p>{name}</p>
          <p>{breed}</p>
        </div>
      </Link>

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
