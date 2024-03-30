import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/Navbar";
import HeaderComponent from "./components/Header";
import CardsContainer from "./components/CardsContainer";

const App = () => {
  return (
    <div>
      <NavbarComponent />
      <HeaderComponent />
      <CardsContainer />
    </div>
  );
};

export default App;
