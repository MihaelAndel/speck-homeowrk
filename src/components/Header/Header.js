import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import FOILogo from '../../assets/images/logo.png';

const Header = () => {
    return (
        <header className="header-main">
            <div className="header-main__inner">
                <Link to="/" className="logo-container">
                    <img src={FOILogo} alt="Logo" />
                </Link>
                <nav className="header-main__nav">
                    <ul>
                        <li>
                            <Link to="/speakers">Sudionici</Link>
                        </li>
                        <li>
                            <Link to="/events">Događanja</Link>
                        </li>
                        <li>
                            <Link to="/">Kontakt</Link>
                        </li>
                        <li>
                            <Link to="/">Prijavi se</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
