import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import MainSection from './components/MainSection/MainSection';
import Home from './pages/Home';
import Speakers from './pages/Speakers';
import Events from './pages/Events';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import titles from './lib/pageTitles';
import Register from './pages/Register';
import Login from './pages/Login';

import { AuthProvider } from './context/AuthContext';

const App = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Header />
                <MainSection>
                    <Route exact path="/" render={() => <Home title={titles.home} />} />

                    <Route
                        path="/speakers"
                        render={() =>
                            localStorage.getItem('token') ? (
                                <Speakers title={titles.speakers} />
                            ) : (
                                <Redirect to={{ pathname: '/login' }} />
                            )
                        }
                    />

                    <Route
                        path="/events"
                        render={() =>
                            localStorage.getItem('token') ? (
                                <Events title={titles.events} />
                            ) : (
                                <Redirect to={{ pathname: '/login' }} />
                            )
                        }
                    />
                    <Route
                        path="/register"
                        render={() =>
                            localStorage.getItem('token') ? (
                                <Redirect to={{ pathname: '/' }} />
                            ) : (
                                <Register title={titles.register} />
                            )
                        }
                    />
                    <Route
                        path="/login"
                        render={() =>
                            localStorage.getItem('token') ? (
                                <Redirect to={{ pathname: '/' }} />
                            ) : (
                                <Login title={titles.login} />
                            )
                        }
                    />
                </MainSection>
                <Footer />
            </AuthProvider>
        </BrowserRouter>
    );
};

export default App;
