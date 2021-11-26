import React from 'react'
import './card.css'
import { ImagePreloader } from '../../components'
import PropTypes from 'prop-types';
import {
    Link
  } from "react-router-dom";

const Card = (props) => {

    return (
        
        <div className="card">
            <Link to={`/post/${props.id}`}>
            <ImagePreloader width="300px" height="200px" src={props.image} alt={props.image} />
            <div className="card__text">
                <p>{props.name}</p>
                <p>{props.breed}</p>
            </div>
            </Link>
        </div>
        
    )
}

    Card.propTypes = {
        name: PropTypes.string.isRequired,
        breed: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
}


export default Card;
