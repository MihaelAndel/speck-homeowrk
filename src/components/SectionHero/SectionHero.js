import React from 'react';

import {
    SectionHeroWrapper,
    DataContainer,
    Title,
    Organizer,
    Date,
    Button,
} from './SectionHeroStyle';

const HeroSection = (props) => {
    const { title, organizer, date, buttonText } = props;
    return (
        <SectionHeroWrapper>
            <DataContainer>
                <Title>{title}</Title>
                <Organizer>{organizer}</Organizer>
                <Date>{date}</Date>
                <Button href="/">{buttonText}</Button>
            </DataContainer>
        </SectionHeroWrapper>
    );
};

export default HeroSection;
