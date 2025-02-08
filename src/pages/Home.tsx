import React from 'react';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import Portfolio from '../components/sections/Portfolio';
import FAQ from '../components/sections/FAQ';

const Home: React.FC = () => {
    return (
        <div>
            <Hero />
            <Services />
            <Portfolio />
            <FAQ />
        </div>
    );
};

export default Home;