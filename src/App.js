import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AppRoutes from "./Routes/AppRoutes";


const App = () => {
  return (
  <>
      <Header />
      <main className="mainContainer">
        <AppRoutes />
      </main>
      <Footer />
  </>
  );
};

export default App;
