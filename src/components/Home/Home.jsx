import React from 'react';
import Header from '../Header/Header'
import BuildTools from '../BuildTools/BuildTools'
import About from '../About/About'
import Services from '../Services/Services';
import BrowserSupport from '../BrowserSupport/BrowserSupport';

const Home = () => {
    return (
        <main>
            <Header/>
            <BuildTools/>
            <About/>
            <Services/>
            <BrowserSupport/>
        </main>

    );
}

export default Home;