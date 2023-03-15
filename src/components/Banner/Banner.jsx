import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; 
import './index.scss';

const Banner = () => {

    // On initialiser le state pour stocker le path de la page
    const [locationHome, setLocationHome] = useState(false);

    // On récupére le path courrant
    const location = useLocation().pathname;

    // Utiliser useEffect pour mettre à jour le state lorsque l'emplacement de la page change
    useEffect(() => {
        if (location === '/') {setLocationHome(true)}
    },[location, locationHome]);

    // Render qui sera fonction de l'emplacement de la page
    return (
        <div className={locationHome ? 'banner banner__home' :'banner banner__about'}>
            {locationHome ? <h1 className='banner__title'>
                Chez vous, partout&nbsp;et&nbsp;ailleurs</h1> : ""}
        </div>
    );
};

export default Banner;
