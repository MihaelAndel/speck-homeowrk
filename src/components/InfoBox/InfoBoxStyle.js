import styled from 'styled-components';
import eventIcon from '../../assets/images/event-icon.png';
import speakersIcon from '../../assets/images/speakers-icon.png';

export const InfoBoxWrapper = styled.div`
    background: #efefef;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #fff;
    padding-bottom: 10px;
`;

export const Icon = styled.div`
    flex: 1 0 25px;
    width: 25px;
    height: 25px;
    margin-right: 15px;
    background: url(${(props) => (props.type === 'event' ? eventIcon : speakersIcon)});
    background-repeat: no-repeat;
    background-size: contain;
`;

export const Title = styled.h2`
    font-size: 18px;
`;

export const Subheader = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 15px 0;
`;

export const SubheaderBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const BoxText = styled.span``;

export const Figure = styled.figure`
    width: 25px;
    height: 25px;
    margin-bottom: 10px;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;

export const About = styled.p`
    padding: 25px 0;
    font-size: 15px;
    border-bottom: 1px solid #fff;
    border-top: 1px solid #fff;
    text-align: center;
`;

export const Footer = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 10px;
`;

export const Button = styled.a`
    font-weight: bold;
    transition: color 0.3s ease-out;
    &:hover {
        color: #58a510;
    }
`;
