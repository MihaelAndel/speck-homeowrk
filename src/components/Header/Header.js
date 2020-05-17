import React, { useContext } from 'react';
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
import AuthContext from '../../context/AuthContext';

const Header = () => {
    const { isLoggedIn, logout } = useContext(AuthContext);
    console.log(isLoggedIn);
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
                        {!isLoggedIn ? (
                            <>
                                <NavigationElement>
                                    <Link to="/login">Prijava</Link>
                                </NavigationElement>
                                <NavigationElement>
                                    <Link to="/register">Registracija</Link>
                                </NavigationElement>
                            </>
                        ) : (
                            <NavigationElement>
                                <Link
                                    to="/"
                                    onClick={() => {
                                        localStorage.removeItem('token');
                                        logout();
                                    }}
                                >
                                    Odjava
                                </Link>
                            </NavigationElement>
                        )}
                    </NavigationList>
                </Navigation>
            </HeaderInner>
        </HeaderWrapper>
    );
};

export default Header;
