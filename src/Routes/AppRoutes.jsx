import React from "react";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Error404 from "../pages/Error404/Error404";
import HousingPages from "../pages/HousingPages/HousingPages";
import { Route, Routes } from "react-router-dom";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/housing/:id" element={<HousingPages />} />
      <Route path="/*" element={<Error404 />} />
    </Routes>
  );
};

export default AppRoutes;
