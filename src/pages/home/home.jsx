import React from 'react';
import About from '../../components/About';        
import Services from '../../components/ServiceCard';
import Hero from '../../components/Hero';           
import Portfolio from '../../components/Portfolio';
import ChoseUs from '../../components/choseUs';

const HomePage = () => {
    return (
        <div className="home-page">
            <Hero />
            <About id="about" />
            <ChoseUs id="chose-us" />
            <Services id="services" />
            <Portfolio id="portfolio" />
        </div>
    );
}

export default HomePage;

