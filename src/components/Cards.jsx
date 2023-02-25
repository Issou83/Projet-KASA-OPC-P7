import React from 'react';

const Cards = ({cover, title, location}) => {
    return (
        <figure className='cards' >
            <img src={cover} alt={location} className='cards__image'></img>
            <figcaption>{title}</figcaption>
        </figure>
    );
};

export default Cards;