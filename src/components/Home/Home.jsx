import React from 'react';
import Header from '../Header/Header';
import BuildTools from '../BuildTools/BuildTools';
import About from '../About/About';
import Services from '../Services/Services';
import BrowserSupport from '../BrowserSupport/BrowserSupport';
import HappyClient from '../HappyClient/HappyClient';
import Pricing from '../Pricing/Pricing';
import Reviews from '../Reviews/Reviews';
import Contact from '../Contacts/Contacts';

const Home = () => {
    return (
        <main>
            <Header/>
            <BuildTools/>
            <About/>
            <Services/>
            <BrowserSupport/>
            <HappyClient/>
            <Pricing/>
            <Reviews/>
            <Contact/>
        </main>

    );
}

export default Home;