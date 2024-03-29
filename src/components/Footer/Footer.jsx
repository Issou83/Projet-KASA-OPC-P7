import React from 'react';
import logoFooter from '../../assets/images/LOGO_Footer.png'
import './index.scss';

const Footer = () => {

    return (
        <footer>
            <img src={logoFooter} className="logoFooter" alt="logo" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
};

export default Footer;
