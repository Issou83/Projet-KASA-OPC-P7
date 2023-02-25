import React from 'react';
import Banner from '../components/Banner'
import { useEffect, useState } from "react";
import Cards from '../components/Cards';
import { Link } from 'react-router-dom';



const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("/logements.json") 
            .then((res) => {return res.json()})
            .then((data) => setData(data))
            .catch((error) => console(error))

    },[])
console.log(data);

    return (
        <main>
            <Banner />
            {data
            .map((housing, id) => (
            <Link className='containerCards' key={id}>
                <Cards location={housing.location} cover={housing.cover} title={housing.title} />
            </Link>
        ))}
        
        </main>
    );
};

export default Home;

