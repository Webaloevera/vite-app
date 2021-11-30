import React from 'react'
import { ImagePreloader } from '../../components'
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import './card.css'


const Card = (props) => {
    return (
        <div className="card">
            <Link to={`/product/${props.id}`}>
            <ImagePreloader width="300px" height="200px" src={props.image} alt={props.breed} />
            <div className="card__text">
                <p>{props.name}</p>
                <p>{props.breed}</p>
            </div>
            </Link>
            <div className="card-link">
                <Link to={`/products/${props.id}/edit/`}>Edit</Link>
            </div>
        </div>
    )
}

Card.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    breed: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
}


export default Card;
