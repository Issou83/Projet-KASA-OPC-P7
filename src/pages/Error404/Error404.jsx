import React from 'react';
import './index.scss';
import { NavLink } from 'react-router-dom';
import errorPage from "../../assets/images/404.png"

const Error404 = () => {
    return (
        <main className='main404'>
            <div className='containerError'>
                <img src={errorPage} alt="" />
                <h1>Oups! La page que vous&nbsp;demandez&nbsp;n'existe&nbsp;pas.</h1>
                <NavLink to="/">
                    <p>Retourner sur la page d'accueil</p>
                </NavLink>
            </div>
        </main>
    );
};

export default Error404;