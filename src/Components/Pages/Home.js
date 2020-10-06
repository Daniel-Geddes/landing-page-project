import React from 'react'
import { Route, Router, Switch } from 'react-router-dom';
import HeroSection from '../HeroSection';
import '../../App.css';


function Home() {
    return (
        <>
            <HeroSection />
        </>
    )
}

export default Home;