import React from 'react';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import "./index.scss";

const Header = () => {
    // Le composant retourne un élément d'en-tête qui contient le logo et la navigation.
    return (
        <header className='header'>
            <Logo /> 
            <Navigation />
        </header>
    );
};

export default Header;
