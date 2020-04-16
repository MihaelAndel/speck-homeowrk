import React from 'react';
import './About.scss';
const About = (props) => {
    const { text, buttonText, link } = props;
    return (
        <div className="about">
            <p>{text}</p>
            <a href={link} className="btn">
                {buttonText}
            </a>
        </div>
    );
};

export default About;
