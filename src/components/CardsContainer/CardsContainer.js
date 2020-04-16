import React from 'react';
import './CardsContainer.scss';

import Card from '../Card/Card';

const CardsContainer = (props) => {
    const cardsList = props.cardsList.map((card, key) => <Card key={key} card={card} />);

    return <div className="cards-container">{cardsList}</div>;
};

export default CardsContainer;
