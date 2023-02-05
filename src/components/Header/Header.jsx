import React from 'react';
import './Header.css'
import Hero from '../Hero/Hero';
import NavBar from '../NavBar/NavBar'

const Header = () => {
    return (
        <section className="header">
            <NavBar/>
            <Hero/>
        </section>
    );
};

export default Header;