import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Carousel from '../../components/Carousel/Carousel';
import Collaps from '../../components/Collaps/Collaps';
import './housingPages.scss';

const HousingPages = () => {
  const [housing, setHousing] = useState();
  const { id: housingId } = useParams(); // Utilise housingId au lieu de id pour éviter les conflits
const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/logements.json');
        const data = await response.json();
        const housingFind = data.find(item => item.id === housingId);
        setHousing(housingFind);
        if (!housingFind) {navigate("/error")}
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [housingId, navigate]);


  if (!housing) {
    return <p>Loading...</p>;
  }

  const { id, title, location, tags, description, name, host, pictures, equipments } = housing;

// const equipmentsListe = {equipments.map((equipment) => ( <li key={equipment}>{equipmentsliste}</li> ))}

  console.log({equipments});
 

  return (
    <main className='housing'>
      <section key={id}>
        <Carousel images={pictures} key={id} />
        <div className='informations'>
          <div>
            <h1>{title}</h1>
            <p className='location'>{location}</p>
            {tags.map(tag => (<button key={tag}>{tag}</button>))}
            <h2>{name}</h2>
          </div>
          <div className='host'>
            <span className='hostName'>{host.name}</span>
            <img src={host.picture} alt='' />
          </div>
        </div>
      </section>
      <div className='sectionCollaps__housing'>
        <Collaps title="Description" content={description}/>
        <Collaps title="Equipement" content={equipments} />
      </div>
    </main>
  );
};

export default HousingPages;
