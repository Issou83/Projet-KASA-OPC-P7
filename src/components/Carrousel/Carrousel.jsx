import React, { useState, useEffect } from "react";
import "./index.scss";
import previous from "../../assets/images/VectorBack.png";
import next from "../../assets/images/VectorForward.png";

//'Housing.jsx' étant le parent de 'Carrousel', on y injécte la props 'images' et les afficher dans ce dernier  
function Carrousel({ images }) {
  // Déclare une state variable "currentImageIndex" pour stocker l'index de l'image actuelle
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Les clics sur les boutons de navigation gauche et droite nous définiseent l'index courrant de l'image à afficher
  useEffect(() => {
    const handleButtonClick = (event) => {
      const buttonId = event.target.id;

      // Au clique sur le bouton précédent, mise à jour de l'index de l'image actuelle par l'index précédent
      if (buttonId === "previous-button") {
        const newIndex =
          (currentImageIndex + images.length - 1) % images.length;
        setCurrentImageIndex(newIndex);
      } 
      //Au clique sur le bouton suivant, mise à jour de l'index de l'image actuelle par l'index suivant
      else if (buttonId === "next-button") {
        const newIndex = (currentImageIndex + 1) % images.length;
        setCurrentImageIndex(newIndex);
      }
    };

    // On écoute l'événements "click" sur les boutons de navigation
    document.addEventListener("click", handleButtonClick);

    // Suppression de l'écouteur d'événements "click", on évite ainsi les comportements indésirables et les fuites de mémoire
    return () => {
      document.removeEventListener("click", handleButtonClick);
    };
  }, [currentImageIndex, images]);

  
  return (
    // Bouton précédent
    <div className="carrousel">
      <div className="carrousel__previous">
        <img
          src={previous}
          alt="précédente"
          id="previous-button"
          className={images.length === 1 ? "arrow__hidden" : "arrow"}/>
      </div>

      {/* Affiche l'image actuelle */}
      <img
        className="carrousel__img"
        src={images[currentImageIndex]}
        alt="carrousel"/>

      {/* Affiche la position actuelle de l'image dans la liste des images */}
      <div className="container">
        {images.length === 1 ? ("") : 
        (<p className="container__position">
            {currentImageIndex + 1}/{images.length}
          </p> )}
      </div>

      {/* Bouton suivant */}
      <div className="carrousel__next">
        <img
          src={next}
          alt="suivante"
          id="next-button"
          className={images.length === 1 ? "arrow__hidden" : "arrow"}/>
      </div>
    </div>
  );
}

export default Carrousel;
