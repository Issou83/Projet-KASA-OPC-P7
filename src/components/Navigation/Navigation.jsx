import React from "react";
import { NavLink } from "react-router-dom";
import "./index.scss";

const Navigation = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        {/* NavLink est utilisé pour ajouter une classe active à l'élément actuellement sélectionné */}
        {/* "to" définit le lien vers lequel le NavLink doit pointer */}
        {/* "isActive" est une fonction qui définit le style du NavLink quand il est sélectionné */}
        <NavLink
          to="/"
          className={(list) => (list.isActive ? "list__active" : "list")}>
          <li>Accueil</li>
        </NavLink>
        <NavLink
          to="/about"
          className={(list) => (list.isActive ? "list__active" : "list")}>
          <li>A propos</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navigation;

