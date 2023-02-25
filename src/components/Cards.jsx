import React from 'react';

const Cards = ({cover, title, location}) => {
    return (
        <figure className='cards' >
            <img src={cover} alt={location} className='cards__image'></img>
            <p>{title}</p>
        </figure>
    );
};

export default Cards;