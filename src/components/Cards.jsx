import React from 'react';
import { Link } from 'react-router-dom';

const Cards = ({housing}) => {


    return (
        <Link to={`/housing/${housing.id}`}>
        <figure className='cards' >
            <img src={housing.cover} alt={housing.location} ></img>
            <h2>{housing.title}</h2>
        </figure>
         </Link>
    );
};

export default Cards;