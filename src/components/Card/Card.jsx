import React from 'react'
import './card.scss'
import PropTypes from 'prop-types';
const Card = (props) => {

    return (
        <div className="card">
            <img src={props.items.image.url} alt={props.items.name}/>
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
