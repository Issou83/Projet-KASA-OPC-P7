import Banner from "../../components/Banner/Banner";
import { useState, useEffect } from "react";
import Cards from "../../components//Cards/Cards";
import "./index.scss";

const Home = () => {
  // Initialiser le state pour stocker les données
  const [data, setData] = useState([]);

  //useEffect pour récupérer les données 
  useEffect(() => {
    // Récupérer les données depuis le fichier JSON
    fetch("/logements.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => setData(data))
      .catch((error) => console(error));
  }, []);

  return (
    <>
      <Banner />
      <section>
        <div className="containerCards">
          {/* On affiche les cartes de logement en bouclant sur le tableau de données */}
          {data.map((housing) => (
            <Cards housing={housing} key={housing.id} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
