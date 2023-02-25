import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import imageHome from "../assets/images/IMG.png";
import imageAbout from "../assets/images/kalen-emsley-Bkci_8qcdvQ-unsplash.png";


const Banner = () => {

    const [locationHome, setLocationHome] = useState(false);

    const location = useLocation().pathname;

    useEffect(() => {
        if (location === '/') {setLocationHome(true)}
    },[]);

    console.log(location);

    return (
        <div className='banner'>
            { locationHome ? 
            <img src={imageHome} className="banner__img" alt="banniére"/> :
            <img src={imageAbout} className="banner__img" alt="banniére"/> }
            <h1 className='banner__title'>Chez vous, partout et ailleurs</h1>
        </div>
        );
    }

export default Banner;