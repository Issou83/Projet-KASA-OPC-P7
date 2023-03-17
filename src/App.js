import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AppRoutes from "./Routes/AppRoutes";

const App = () => {
  return (
    <>
      {/* Composant Header */}
      <Header />
      
      {/* Conteneur principal pour le contenu de l'application */}
      <main className="mainContainer">
        {/* Les routes de l'application */}
        <AppRoutes />
      </main>
      
      {/* Composant Footer */}
      <Footer />
    </>
  );
};

export default App;

