import React from 'react';
import { Link } from 'react-router-dom';

const Cards = ({housing}) => {
    return (
        <Link >
        <figure className='cards' >
            <img src={housing.cover} alt={housing.location} ></img>
            <p>{housing.title}</p>
        </figure>
         </Link>
    );
};

export default Cards;