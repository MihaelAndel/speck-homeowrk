import React, { useState, useEffect } from 'react';

import { getEvents } from '../api/events';
import SectionEvents from '../components/SectionEvents/SectionEvents';
import InfoBox from '../components/InfoBox/InfoBox';
import LoaderWrapper from '../components/LoaderWrapper/LoaderWrapper';
import SearchBox from '../components/SearchBox/SearchBox';

const Events = (props) => {
    document.title = props.title;
    const [eventList, setEventList] = useState('');
    const [allEvents, setAllEvents] = useState('');

    useEffect(() => {
        const getData = async () => {
            const response = await getEvents(localStorage.getItem('token'));
            setEventList(response.events);
            setAllEvents(response.events);
        };
        getData();
    }, []);

    const filterEvents = (filterText) => {
        if (filterText === '') {
            setEventList(allEvents);
        } else {
            setEventList(() =>
                eventList.filter(
                    (event) => event.title.toUpperCase().indexOf(filterText.toUpperCase()) !== -1
                )
            );
        }
    };
    console.log(eventList);
    return (
        <>
            <h1 class="page-title">Događanja</h1>
            {!allEvents ? (
                <LoaderWrapper />
            ) : (
                <>
                    <SearchBox placeholder="Search events..." callback={filterEvents} />
                    <SectionEvents>
                        {eventList &&
                            eventList.map((event, index) => (
                                <InfoBox
                                    key={index}
                                    title={event.title}
                                    location={event.location}
                                    dateTime={event.dateTime}
                                    links={event.links}
                                    about={event.about}
                                />
                            ))}
                    </SectionEvents>
                </>
            )}
        </>
    );
};

export default Events;
