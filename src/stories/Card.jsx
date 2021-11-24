import React from 'react'
import './card.css'
import PropTypes from 'prop-types';


const Card = ({name, bred_for, urlImg}) => {
    return (
        <div className="card">
            {/* <img src={props.items.image.url} alt={props.items.name}/> */}
            <img src={urlImg} />
            <div className="card__text">
                <p>{name}</p>
                <p>{bred_for}</p>
            </div>
        </div>
    )
}

Card.propTypes = {
    name: PropTypes.string,
    bred_for: PropTypes.string,
    urlImg: PropTypes.string,
}


export default Card;