import styled from 'styled-components';
import { Btn } from '../../lib/styles/GeneralStyles';
import eventImage from '../../assets/images/event.jpg';

export const SectionHeroWrapper = styled.section`
    position: relative;
    height: 500px;
    background-image: url(${eventImage});
    background-color: rgba(0, 0, 0, 0.69);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    background-attachment: fixed;
    background-blend-mode: multiply;
`;

export const DataContainer = styled.div`
    position: absolute;
    z-index: 1;
    left: calc((100% - 400px) / 2);
    top: calc((100% - 250px) / 2);
    width: 400px;
    height: 250px;
    background-color: rgba(255, 255, 255, 0.2);
    padding: 20px;
    border-radius: 15px;
`;

export const Button = styled(Btn)`
    margin: 0 auto;
`;

export const Title = styled.h1`
    text-align: center;
    font-size: 30px;
    color: #fff;
    margin-bottom: 20px;
`;

export const Organizer = styled.span`
    display: block;
    text-align: center;
    font-size: 30px;
    color: #c59613;
    margin-bottom: 30px;
`;

export const Date = styled.p`
    text-align: center;
    font-size: 25px;
    color: #fff;
    margin-bottom: 20px;
`;
