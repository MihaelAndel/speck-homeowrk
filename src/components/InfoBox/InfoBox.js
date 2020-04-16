import React from 'react';
import './InfoBox.scss';
import locationIcon from '../../assets/images/location-icon.png';
import timeIcon from '../../assets/images/time-icon.png';

const InfoBox = (props) => {
    const { title, location, dateTime, about } = props;
    const type = location ? '-event' : '-speaker';
    return (
        <div class="info-box">
            <div class="info-box__header">
                <div class={`info-box__icon info-box__icon_type${type}`}></div>
                <h2 class="info-box__title">{title}</h2>
            </div>
            {type === '-event' ? (
                <div class="info-box__subheader">
                    <div class="info-box__subheader-box">
                        <figure class="info-box__subheader-figure">
                            <img
                                class="info-box__subheader-img"
                                src={locationIcon}
                                alt="Location icon"
                            />
                        </figure>
                        <span class="info-box__subheader-box-text">{location}</span>
                    </div>
                    <div class="info-box__subheader-box">
                        <figure class="info-box__subheader-figure">
                            <img class="info-box__subheader-img" src={timeIcon} alt="Time icon" />
                        </figure>
                        <span class="info-box__subheader-box-text">{dateTime}</span>
                    </div>
                </div>
            ) : null}
            <p class="info-box__about">{about}</p>
            <div class="info-box__footer">
                <a href="/" class="info-box__btn-join">
                    Prijavi se na predavanje
                </a>
            </div>
        </div>
    );
};

export default InfoBox;
