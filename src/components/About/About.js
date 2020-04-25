import React from 'react';
import { AboutWrapper, AboutButton, AboutText } from './AboutStyle';
const About = (props) => {
    const { text, buttonText, link } = props;
    return (
        <AboutWrapper>
            <AboutText>{text}</AboutText>
            <AboutButton href={link}>{buttonText}</AboutButton>
        </AboutWrapper>
    );
};

export default About;
