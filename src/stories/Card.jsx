import React from 'react';
import PropTypes from 'prop-types';
import './card.css';
 
 
 
export const Card = ({name, bred_for, urlImg}) => {
    return (
        <div className="card">
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
 
Card.defaultProps = {
  name: 'Albert',
  bred_for: 'Satana',
  urlImg: 'https://cdn.britannica.com/60/8160-050-08CCEABC/German-shepherd.jpg',
};