import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Carousel from '../../components/Carousel/Carousel';
import Collaps from '../../components/Collaps/Collaps';
import './housingPages.scss';
import starOrange from "../../assets/images/StarOrange.png";
import starGrey from "../../assets/images/StarGrey.png";

const HousingPages = () => {
  const [housing, setHousing] = useState();
  const housingId = useParams().id;
  const navigate = useNavigate();
  const ratingArray = [1,2,3,4,5];

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

  const { id, title, location, tags, description, rating, name, host, pictures, equipments } = housing;
 
  return (
    <main className='housing'>
      <section key={id}>
        <Carousel images={pictures} key={id} />
        <div className='informations'>
          <div>
            <h1>{title}</h1>
            <p className='location'>{location}</p>
            {tags.map(tag => (<button key={tag}><p>{tag}</p></button>))}
            <h2>{name}</h2>
          </div>
          <div className='host'>
            <div className='host__info'>
              <span className='host__info__name'>{host.name}</span>
              <img src={host.picture} alt='' />
            </div>
            <div className='host__stars'>
              {ratingArray
                .map((index) => {
                  const starValue = index + 1;
                  return (<img 
                  className='host__stars__star' 
                  key={index} 
                  src={starValue <= rating ? starOrange : starGrey} 
                  alt="Etoiles" />)
              })} 
            </div>
          </div>
        </div>
      </section>
      <section className='sectionCollaps__housing'>
        <Collaps title="Description" content={description}/>
        <Collaps title="Equipement" content = {
          <ul>
            {equipments.map((equipment, index) => (
            <li key={index}>{equipment}</li>))}
          </ul>}/> 
      </section>
    </main>
  );
};

export default HousingPages;
