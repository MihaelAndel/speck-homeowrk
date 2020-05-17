import React, { createContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('token') !== null);

    const logout = () => {
        setIsLoggedIn(false);
    };

    const login = () => {
        setIsLoggedIn(true);
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, logout, login }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
