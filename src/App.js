import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Error404 from "./pages/Error404";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HousingPages from "./pages/HousingPages";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/housing/:id" element={<HousingPages />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
