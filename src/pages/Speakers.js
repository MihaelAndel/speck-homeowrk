import React, { useEffect, useState } from 'react';

import LoaderWrapper from '../components/LoaderWrapper/LoaderWrapper';
import SearchBox from '../components/SearchBox/SearchBox';
import InfoBox from '../components/InfoBox/InfoBox';
import { getSpeakers } from '../api/speakers';
import SectionEvents from '../components/SectionEvents/SectionEvents';

const Speakers = (props) => {
    document.title = props.title;
    const [speakerList, setSpeakerList] = useState('');
    const [allSpeakers, setAllSpeakers] = useState('');

    useEffect(() => {
        const getData = async () => {
            const response = await getSpeakers(localStorage.getItem('token'));
            setSpeakerList(response.speakers);
            setAllSpeakers(response.speakers);
        };
        getData();
    }, []);

    const filterSpeakers = (filterText) => {
        if (filterText === '') {
            setSpeakerList(allSpeakers);
        } else {
            setSpeakerList(() =>
                speakerList.filter(
                    (event) => event.title.toUpperCase().indexOf(filterText.toUpperCase()) !== -1
                )
            );
        }
    };

    return (
        <>
            <h1 class="page-title">Sudionici</h1>
            {!allSpeakers ? (
                <LoaderWrapper />
            ) : (
                <>
                    <SearchBox placeholder="Search speakers..." callback={filterSpeakers} />
                    <SectionEvents>
                        {speakerList.map((speaker, index) => (
                            <InfoBox
                                key={index}
                                title={speaker.title}
                                location={speaker.location}
                                dateTime={speaker.dateTime}
                                links={speaker.links}
                                about={speaker.about}
                            />
                        ))}
                    </SectionEvents>
                </>
            )}
        </>
    );
};

export default Speakers;
