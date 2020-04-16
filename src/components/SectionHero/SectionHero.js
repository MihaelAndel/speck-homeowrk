import React from 'react';

import './SectionHero.scss';

const HeroSection = (props) => {
    const { title, organizer, date, buttonText } = props;
    return (
        <section className="section-hero">
            <div className="section-hero__data-container">
                <h1 className="section-hero__title">{title}</h1>
                <span className="section-hero__organizer">{organizer}</span>
                <p className="section-hero__date">{date}</p>
                <a href="/" className="btn">
                    {buttonText}
                </a>
            </div>
        </section>
    );
};

export default HeroSection;
