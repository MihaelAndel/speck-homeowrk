import React from 'react';
import './Card.scss';

const Card = (props) => {
    const { image, title, alt, link } = props.card;
    return (
        <a href={link} className="card">
            <figure>
                <img src={image} alt={alt} />
            </figure>
            <p className="card__title">{title}</p>
        </a>
    );
};

export default Card;
