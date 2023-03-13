import React from "react";
import { NavLink } from "react-router-dom";
import "./index.scss";

const Navigation = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <NavLink
          to="/"
          className={(list) => (list.isActive ? "list__active" : "list")}>
          <li>Acceuil</li>
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
