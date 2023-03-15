import React, { useState, useEffect } from "react";
import arrowUp from "../../assets/images/VectorUp.png";
import arrowDown from "../../assets/images/VectorDown.png";
import { useLocation } from "react-router-dom";
import "./index.scss";

const Collapse = ({ title, content }) => {
  // State pour gérer l'état d'ouverture/fermeture du Collapse
  const [open, setOpen] = useState(false);
  // State pour gérer le style en fonction du path actuelle
  const [locationAbout, setLocationAbout] = useState(false);

  // On récupérere le path actuelle
  const location = useLocation().pathname;

  // On met à jour le state locationAbout en fonction de 'location'
  useEffect(() => {
    if (location === "/about") {
      setLocationAbout(true);
    }
  }, [location]);

  // Fonction appelée lorsque l'utilisateur clique sur le Collapse
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div
      className={
        locationAbout
          ? "containerCollapse containerCollapse__about"
          : "containerCollapse containerCollapse__housing"
      }
    >
      <div
        className={
          locationAbout
            ? "containerCollapse__header containerCollapse__header__about"
            : "containerCollapse__header containerCollapse__header__housing"
        }
        onClick={handleToggle}
      >
        <p
          className={
            locationAbout
              ? "containerCollapse__title containerCollapse__title__about"
              : "containerCollapse__title containerCollapse__title__housing"
          }
        >
          {title}
        </p>

        <div className="containerCollapse__arrows">
          {/* Affichage de la flèche vers le haut ou vers le bas en fonction de l'état d'ouverture/fermeture */}
          {open ? (
            <img className="containerCollapse__arrow" src={arrowUp} alt="" />
          ) : (
            <img className="containerCollapse__arrow" src={arrowDown} alt="" />
          )}
        </div>
      </div>

      {/* Affichage du contenu du Collapse s'il est ouvert */}
      {open && (
        <div
          className={
            locationAbout
              ? "containerCollapse__content containerCollapse__content__about"
              : "containerCollapse__content containerCollapse__content__housing"
          }
        >
          <span className="containerCollapse__body">{content}</span>
        </div>
      )}
    </div>
  );
};

export default Collapse;
