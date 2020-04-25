import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderWrapper = styled.header`
    position: fixed;
    top: 0;
    z-index: 1000;
    background: #fff;
    width: 100%;
    height: 80px;
`;

export const HeaderInner = styled.div`
    max-width: 1280px;
    margin: 0 auto;
`;

export const Navigation = styled.nav`
    display: none;

    @media only screen and (min-width: 1024px) {
        display: block;
        float: right;
    }
`;

export const NavigationList = styled.ul`
    list-style: none;
`;

export const NavigationElement = styled.li`
    display: inline-block;
    line-height: 80px;
    margin-right: 50px;

    &:last-child {
        margin-right: 0;
    }

    a {
        font-size: 17px;
        font-weight: 700;
        letter-spacing: 0.02em;
        transition: color 0.3s ease-out;

        &:hover {
            color: #c59613;
        }
    }
`;

export const LogoContainer = styled(Link)`
    width: 80px;
    height: 70px;
    margin-top: 5px;
    float: left;
`;

export const Logo = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;
