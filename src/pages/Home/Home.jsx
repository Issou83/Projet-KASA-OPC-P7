import Banner from '../../components/Banner/Banner';
import { useState, useEffect } from 'react';
import Cards from '../../components//Cards/Cards';
import './index.scss';


const Home = () => {
    
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("/logements.json") 
            .then((res) => {return res.json()})
            .then((data) => setData(data))
            .catch((error) => console(error))
    },[]);

    return (
        <main>
            <Banner />
            <section>
            <div className='containerCards'>
                {data
                .map((housing) => (
                    <Cards housing={housing} key={housing.id}/>
                ))}
            </div>
            </section>
        </main>
    );
};

export default Home;

