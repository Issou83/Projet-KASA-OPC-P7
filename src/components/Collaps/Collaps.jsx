import React, { useState, useEffect } from "react";
import vectorUp from '../../assets/images/VectorUp.png';
import vectorDown from '../../assets/images/VectorDown.png';
import { useLocation } from 'react-router-dom'; 

import './index.scss';


const Collaps = ({title, content}) => {
  const [open, setOpen] = useState(false); // On crée un état local "open" pour stocker l'état actuel du collaps (ouvert ou fermé), et la fonction "setOpen" pour le mettre à jour
  const [locationAbout, setLocationAbout] = useState(false);

  const location = useLocation().pathname;

  useEffect(() => {
    if (location === '/about') {setLocationAbout(true)}
},[location,locationAbout]);

console.log(locationAbout);


  const handleToggle = () => {
    setOpen(!open); // On définit une fonction "handleToggle" pour basculer l'état du collaps lorsque l'utilisateur clique sur la flèche
  };

  return (
    <div className={locationAbout ? " containerCollaps containerCollaps__about" : " containerCollaps containerCollaps__housing" }>
      <div className="containerCollaps__header" onClick={handleToggle}> {/* Lorsque l'utilisateur clique sur le header (la barre contenant le titre), la fonction "handleToggle" est appelée pour basculer l'état du collaps */}
        <p className="containerCollaps__title">{title}</p> {/* Le titre du collaps */}
        <div>{open ? <img src={vectorUp} alt="" />  : <img src={vectorDown} alt="" />}</div> {/* La flèche affichée dépend de l'état actuel du collaps. Si le collaps est ouvert (open=true), la flèche pointe vers le bas, sinon elle pointe vers le haut */}
      </div>
      {open && ( // Si le collaps est ouvert, le contenu est affiché (la classe "collaps-content" est ajoutée), sinon il est masqué
        <div className="containerCollaps__content">
          <p className="containerCollaps__body">{content}</p> {/* Le contenu du collaps */}
        </div>
      )}
    </div>
  );
};

export default Collaps;
