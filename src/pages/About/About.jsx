import React, { useEffect, useState } from 'react';
import Banner from '../../components/Banner/Banner';
import Collaps from '../../components/Collaps/Collaps';
import "./index.scss";


const About = () => {
    const [abouts, setAbout] = useState([]); 

        useEffect(() => {
            fetch("/About.json") 
                .then((res) => {return res.json()})
                .then((abouts) => setAbout(abouts))
                .catch((error) => console(error))
    },[]);
   console.log(abouts);

    return (

        <main className='mainAbout'>
           <Banner />
           <div className='sectionCollaps__about'>
            
            {abouts.map((about) => (
            <div className='coll'>
            <Collaps key={about.id} title={about.title} content={about.content}/> 
            </div>
            ))}
           </div>        
        </main>

    );
};

export default About;