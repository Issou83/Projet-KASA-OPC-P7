import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/LOGO.png';
import './index.scss';

const Logo = () => {

    return (
        <Link to="/" className='logo'>
            <img src={logo} alt="logo kasa" />
        </Link>
    );
};

export default Logo;
