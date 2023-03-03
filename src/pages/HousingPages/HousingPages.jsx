
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Carousel from '../../components/Carousel/Carousel';
import './index.scss';

const HousingPages = () => {
    const [housing, setHousing] = useState(null);
    const { id } = useParams();
    console.log(useParams());
  
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/logements.json');
                const data = await response.json();
                const housingFind = data.find((item) => item.id === id.toString());
                setHousing(housingFind);
                console.log(housingFind);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [id]);

    return (
        <main>
            {housing ? (
                <div key={housing.id}>
                    <Carousel images={housing.pictures} key={id}/>
                    <h1>{housing.title}</h1>
                    <p>{housing.description}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </main>
    );
};

export default HousingPages;
