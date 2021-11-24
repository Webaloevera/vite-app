import React from 'react'
import './card.css'
import PropTypes from 'prop-types';
const Card = (props) => {

    return (
        <div className="card">
            {/* <img src={props.items.image.url} alt={props.items.name}/> */}
            <img src={"https://cdn.britannica.com/60/8160-050-08CCEABC/German-shepherd.jpg"} />
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
