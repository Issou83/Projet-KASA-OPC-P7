import React from 'react';
import { useLocation } from 'react-router-dom';
import imageHome from "../assets/images/IMG.png";
// import imageAbout from "../assets/images/kalen-emsley-Bkci_8qcdvQ-unsplash.png";


const Banner = () => {

    const location = useLocation().pathname;
    console.log({location});
    const home = (location) => {if ({location}!=={location:"/about"}) return {location}}
    console.log(home);
    // const [location, setLocation] = location("/")
    return (
        <div className='banner'>
         <img src={imageHome} className="banner__img" alt="banniére"/>
            <h1 className='banner__title'>Chez vous, partout et ailleurs</h1>
        </div>
        );
    }

export default Banner;