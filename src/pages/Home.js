import React from 'react';

import SectionHero from '../components/SectionHero/SectionHero';
import SectionMore from '../components/SectionMore/SectionMore';
import SectionLastYear from '../components/SectionLastYear/SectionLastYear';
import lastYear from '../lib/lastYear';
import cards from '../lib/cards';
import heroContent from '../lib/hero';
import aboutContent from '../lib/about';

const Home = (props) => {
    document.title = props.title;
    return (
        <>
            <SectionHero
                title={heroContent.title}
                organizer={heroContent.organizer}
                date={heroContent.date}
                buttonText={heroContent.buttonText}
            />
            <SectionMore aboutContent={aboutContent} cards={cards} />
            <SectionLastYear text={lastYear.text} image={lastYear.image} title={lastYear.title} />
        </>
    );
};

export default Home;
