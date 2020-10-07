import React from 'react'
import { Route, Router, Switch } from 'react-router-dom';
import HeroSection from '../HeroSection';
import '../../App.css';
import Cards from '../Cards';
import Footer from '../Footer';


function Home() {
    return (
        <>
            <HeroSection />
            <Cards />
            <Footer />
        </>
    )
}

export default Home;