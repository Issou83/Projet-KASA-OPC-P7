import React from 'react';
import logo from '../../assets/images/LOGO.png';
import './index.scss';

const Logo = () => {
    return (
        <div className='logo'>
            <img src={logo} alt="logo kasa" />
        </div>
    );
};

export default Logo;