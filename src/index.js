import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import "./styles/main.scss";

// Créer un point d'entrée dans l'arbre du render/rendu React
// qui sera patcher au DOM"
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendre l'application React dans le point d'entrée créé précédemment
// en utilisant le composant <BrowserRouter>
// qui fournit une gestion des routes pour l'application React
// et le composant <App> qui est le point d'entrée de l'application React
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);


