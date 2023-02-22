import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className='nav'>
            <ul className="navList">
                <NavLink to="/"  className={(list) => (list.isActive ? "list__active" : "list")}>
                    <li>Acceuil</li>
                </NavLink>
                <NavLink to="/about"  className={(list) => (list.isActive ? "list__active" : "list")}>
                    <li>A propos</li>
                </NavLink>
            </ul>
        </nav>
    );
};

export default Navigation;