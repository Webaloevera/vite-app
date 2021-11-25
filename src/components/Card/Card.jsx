import React from 'react'
import './card.css'
import { ImagePreloader } from '../../components'
import PropTypes from 'prop-types';
const Card = (props) => {

    return (
        <div className="card">
            <ImagePreloader width="300px" height="200px" src={props.items.image.url} alt={props.items.image.url} />
            <div className="card__text">
                <p>{props.items.name}</p>
                <p>{props.items.bred_for}</p>
            </div>
        </div>
    )
}

    Card.propTypes = {
        items: PropTypes.object.isRequired
}


export default Card;
