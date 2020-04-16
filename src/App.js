import React from 'react';
import './App.scss';
import { BrowserRouter, Route } from 'react-router-dom';

import MainSection from './components/MainSection/MainSection';
import Home from './pages/Home';
import Speakers from './pages/Speakers';
import Events from './pages/Events';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import titles from './lib/pageTitles';

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <MainSection>
                <Route exact path="/" render={() => <Home title={titles.home} />} />
                <Route path="/speakers" render={() => <Speakers title={titles.speakers} />} />
                <Route path="/events" render={() => <Events title={titles.events} />} />
            </MainSection>
            <Footer />
        </BrowserRouter>
    );
};

export default App;
