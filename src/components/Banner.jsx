import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Banner = () => {

    const [locationHome, setLocationHome] = useState(false);

    const location = useLocation().pathname;

    useEffect(() => {
        if (location === '/') {setLocationHome(true)}
    },[location,locationHome]);

    console.log(location);

    return (
        <div className={locationHome ? 'banner banner__home' :'banner banner__about'}>
            {locationHome ? <h1 className='banner__title'>Chez vous, partout et ailleurs</h1> : ""}
        </div>
        );
    };

    
export default Banner;