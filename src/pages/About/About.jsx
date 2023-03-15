import React, { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import Collapse from "../../components/Collapse/Collapse";
import "./index.scss";

const About = () => {
  // Initialiser le state pour stocker les données
  const [abouts, setAbout] = useState([]);

  // Utiliser useEffect pour récupérer les données une seule fois après que le composant est monté
  useEffect(() => {
    // Récupérer les données depuis le fichier JSON
    fetch("/About.json")
      .then((res) => {
        return res.json();
      })
      .then((abouts) => setAbout(abouts))
      .catch((error) => console(error));
  }, []);

  return (
    <>
      <Banner />
      <div className="sectionCollaps__about">
        {/* Afficher les collapse de la section "About" en bouclant sur le tableau de données */}
        {abouts.map((about) => (
          <div key={about.id} className="containerCollapseAbout">
            <Collapse title={about.title} content={about.content} />
          </div>
        ))}
      </div>
    </>
  );
};

export default About;
