import React, { useState, useEffect } from 'react'; 
import { useParams, useNavigate } from 'react-router-dom'; 
import Carrousel from '../../components/Carrousel/Carrousel';
import Collapse from '../../components/Collapse/Collapse'; 
import './index.scss'; 
import starOrange from "../../assets/images/StarOrange.png"; 
import starGrey from "../../assets/images/StarGrey.png";

const HousingPages = () => {
  const [housing, setHousing] = useState(); // Déclaration de l'état pour le logement et de la méthode pour le modifier
  const housingId = useParams().id; // On écupére de l'ID du logement dans l'URL avec la méthode useParams
  const navigate = useNavigate(); // On stock la méthode navigate
  const ratingArray = [1,2,3,4,5]; // On déinit un tableau pour les étoiles de notation

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/logements.json'); // Récupération des données du fichier JSON
        const data = await response.json(); // Conversion des données en objet JSON
        const housingFind = data.find(item => item.id === housingId); // Récupération du logement correspondant à l'ID dans data
        setHousing(housingFind); // On change l'état housing avec les données du logement
        if (!housingFind) {navigate("/error")} // Redirection vers la page 404 si le logement n'existe pas
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [housingId, navigate]);

  if (!housing) { // Affichage d'un message de chargement si le logement n'est pas encore récupéré
    return <p>Chargement en cours...</p>;
  }

  // Récupération des données du logement (par déstructuration)
  const { id, title, location, tags, description, rating, name, host, pictures, equipments } = housing;

  return (
    <>
      <section key={id}>
        <Carrousel images={pictures} key={id} />
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
              <img src={host.picture} alt='hôte' />
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
      <section className='sectionCollapse__housing'>
        <Collapse title="Description" content={description}/>
        <Collapse title="Equipement" content = {
          <ul>
            {equipments.map((equipment, index) => (
            <li key={index}>{equipment}</li>))}
          </ul>}/> 
      </section>
    </>
  );
};

export default HousingPages;
