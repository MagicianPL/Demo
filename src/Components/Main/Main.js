import React from "react";
import Menu from "./Menu";

import "./Main.css";
import arrow from "./arrow.png";

const Main = () => {
  return (
    <main>
      <h1>Zapisane kursy</h1>
      <div className="flex-container">
        <input
          className="search"
          type="text"
          placeholder="Jakiego kursu szukasz?"
        />
        <button className="level">
          Poziom <img src={arrow} alt="arrow" />
        </button>
      </div>
      <Menu />
    </main>
  );
};

export default Main;
