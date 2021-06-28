/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useContext,useState} from 'react';
import Prices from '../components/Prices';
import Banner from '../components/Banner';
import Cards from '../components/Cards';
import Contact from '../components/Contact';
import Services from '../components/Services';
import Intro from '../components/Intro';




const Home = () => {
   
   
   
    
    
    return (
        <div>
            <Banner />
            <Intro />
            <Prices />
            <Cards />
            <Services />
            <Contact />
        </div>
    );
}

export default Home;