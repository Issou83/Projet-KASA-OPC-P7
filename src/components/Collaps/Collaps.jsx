import React, { useState } from "react";
import vectorUp from '../../assets/images/VectorUp.png';
import vectorDown from '../../assets/images/VectorDown.png';
import './index.scss';


const Collaps = ({title, content}) => {
  const [open, setOpen] = useState(false); // On crée un état local "open" pour stocker l'état actuel du collaps (ouvert ou fermé), et la fonction "setOpen" pour le mettre à jour

  const handleToggle = () => {
    setOpen(!open); // On définit une fonction "handleToggle" pour basculer l'état du collaps lorsque l'utilisateur clique sur la flèche
  };

  return (
    <div className="collaps">
      <div className="collaps__header" onClick={handleToggle}> {/* Lorsque l'utilisateur clique sur le header (la barre contenant le titre), la fonction "handleToggle" est appelée pour basculer l'état du collaps */}
        <p className="title">{title}</p> {/* Le titre du collaps */}
        <span>{open ? <img src={vectorUp} alt="" />  : <img src={vectorDown} alt="" />}</span> {/* La flèche affichée dépend de l'état actuel du collaps. Si le collaps est ouvert (open=true), la flèche pointe vers le bas, sinon elle pointe vers le haut */}
      </div>
      {open && ( // Si le collaps est ouvert, le contenu est affiché (la classe "collaps-content" est ajoutée), sinon il est masqué
        <div className="collaps__content">
          <p className="content">{content}</p> {/* Le contenu du collaps */}
        </div>
      )}
    </div>
  );
};

export default Collaps;
