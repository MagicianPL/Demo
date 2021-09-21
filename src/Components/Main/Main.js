import React from "react";
import Menu from "./Menu";
import TilesContent from "./TilesContent";

import "./Main.css";
import arrow from "./arrow.png";

const Main = () => {
  return (
    <main>
      <h1>Zapisane kursy</h1>
      <div className="flex-container inputs">
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
      <TilesContent />
    </main>
  );
};

export default Main;
