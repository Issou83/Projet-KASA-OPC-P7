import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; 
import './index.scss';

const Banner = () => {

    const [locationHome, setLocationHome] = useState(false);

    const location = useLocation().pathname;

    useEffect(() => {
        if (location === '/') {setLocationHome(true)}
    },[location,locationHome]);

    console.log(location);

    return (
        <div className={locationHome ? 'banner banner__home' :'banner banner__about'}>
            {locationHome ? <h1 className='banner__title'>
                <span>Chez vous,</span>&nbsp;
                <span> partout et ailleurs</span></h1> : ""}
        </div>
        );
    };

    
export default Banner;