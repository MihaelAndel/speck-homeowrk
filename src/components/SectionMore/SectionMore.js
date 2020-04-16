import React from 'react';
import './SectionMore.scss';
import CardsContainer from '../CardsContainer/CardsContainer';
import About from '../About/About';

const MoreSection = (props) => {
    const { cards, aboutContent } = props;
    return (
        <section className="section-more">
            <About
                text={aboutContent.text}
                buttonText={aboutContent.buttonText}
                link={aboutContent.link}
            />
            <CardsContainer cardsList={cards} />
        </section>
    );
};

export default MoreSection;
