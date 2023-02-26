import Banner from '../components/Banner'
import { useState, useEffect } from 'react';
import Cards from '../components/Cards';

const Home = () => {
    
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("/logements.json") 
            .then((res) => {return res.json()})
            .then((data) => setData(data))
            .catch((error) => console(error))
    },[]);
    console.log({data});
// useEffect(() => {
//     async function getHousings() {
//         try {
//             const response = await fetch("/logements.json")
//             const {data} =  await response.json()
//             setData(data)
//         }
//         catch(error) {
//             console.log(error)
//         }
//     }
//     getHousings()
// },[])

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

