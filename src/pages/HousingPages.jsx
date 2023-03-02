import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


const HousingPages = () => {
    const [data, setData] = useState([]);
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch("/logements.json") 
            .then((res) => {return res.json()})
            .then((data) => setData(data))
            .catch((error) => console(error))
    },[]);
    const housingFind = data.find(({ id }) => id === params.id);

    console.log(housingFind.title);

    return (
        <div>
                {/* <img src={housingFind.cover} alt="" /> */}
        </div>
    );
};

export default HousingPages;