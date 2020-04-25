import React from 'react';

import {
    About,
    Icon,
    Image,
    Figure,
    InfoBoxWrapper,
    Header,
    Title,
    Subheader,
    SubheaderBox,
    Footer,
    Button,
    BoxText,
} from './InfoBoxStyle';

import locationIcon from '../../assets/images/location-icon.png';
import timeIcon from '../../assets/images/time-icon.png';

const InfoBox = (props) => {
    const { title, location, dateTime, about } = props;
    const type = location ? 'event' : 'speaker';
    return (
        <InfoBoxWrapper>
            <Header>
                <Icon type={type}></Icon>
                <Title>{title}</Title>
            </Header>
            {type === 'event' ? (
                <Subheader>
                    <SubheaderBox>
                        <Figure>
                            <Image src={locationIcon} alt="Location icon" />
                        </Figure>
                        <BoxText>{location}</BoxText>
                    </SubheaderBox>
                    <SubheaderBox>
                        <Figure>
                            <Image src={timeIcon} alt="Time icon" />
                        </Figure>
                        <BoxText>{dateTime}</BoxText>
                    </SubheaderBox>
                </Subheader>
            ) : null}
            <About>{about}</About>
            <Footer>
                <Button href="/">Prijavi se na predavanje</Button>
            </Footer>
        </InfoBoxWrapper>
    );
};

export default InfoBox;
