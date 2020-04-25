import React from 'react';
import { Link } from 'react-router-dom';

import {
    HeaderInner,
    HeaderWrapper,
    NavigationList,
    Navigation,
    NavigationElement,
    LogoContainer,
    Logo,
} from './HeaderStyle';
import FOILogo from '../../assets/images/logo.png';

const Header = () => {
    return (
        <HeaderWrapper>
            <HeaderInner>
                <LogoContainer to="/">
                    <Logo src={FOILogo} alt="Logo" />
                </LogoContainer>
                <Navigation>
                    <NavigationList>
                        <NavigationElement>
                            <Link to="/speakers">Sudionici</Link>
                        </NavigationElement>
                        <NavigationElement>
                            <Link to="/events">Događanja</Link>
                        </NavigationElement>
                        <NavigationElement>
                            <Link to="/">Kontakt</Link>
                        </NavigationElement>
                        <NavigationElement>
                            <Link to="/">Prijavi se</Link>
                        </NavigationElement>
                    </NavigationList>
                </Navigation>
            </HeaderInner>
        </HeaderWrapper>
    );
};

export default Header;
