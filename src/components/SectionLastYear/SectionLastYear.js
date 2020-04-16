import React from 'react';
import './SectionLastYear.scss';

const LastYearSection = (props) => {
    const { text, image, title } = props;
    return (
        <section className="section-last-year">
            <div className="section-last-year__inner">
                <h2>{title}</h2>
                <p>{text}</p>
                <figure>
                    <img src={image} alt="FOI careers 2019" />
                </figure>
            </div>
        </section>
    );
};

export default LastYearSection;
