import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav >
            <ul className="navList">
                <NavLink to="/"  className='list'>
                    <li className='list'>Acceuil</li>
                </NavLink>
                <NavLink to="/about"  className='list'>
                    <li>A propos</li>
                </NavLink>
            </ul>
        </nav>
    );
};

export default Navigation;