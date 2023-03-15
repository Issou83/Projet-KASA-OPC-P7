import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

//Aprés récupération de la props 'housing' (injécté par 'Home.jsx'), le render nous affiche ses éléments.
const Cards = ({housing}) => {


    return (
        <Link to={`/housing/${housing.id}`} className="card">
            <figure className='card__content' >
                <img src={housing.cover} alt={housing.location} ></img>
                <h2>{housing.title}</h2>
            </figure>
        </Link>
    );
};

export default Cards;
