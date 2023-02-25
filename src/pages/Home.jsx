import React from 'react';
import Banner from '../components/Banner'
import { useEffect, useState } from "react";
import Cards from '../components/Cards';




const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("/logements.json") 
            .then((res) => {return res.json()})
            .then((data) => setData(data))
            .catch((error) => console(error))

    },[])

    return (
        <main>
            <Banner />
            <div className='containerCards'>
            {data
            .map((housing) => (
                <Cards housing={housing} key={housing.id}/>
        ))}
        </div>
        </main>
    );
};

export default Home;

