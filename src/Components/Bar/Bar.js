import React from "react";

import "./Bar.css";
import Logo from "./Logo.png";
import search from "./search.png";
import heart from "./heart.png";
import lightning from "./lightning.png";

const Bar = () => {
  return (
    <div className="container-bar">
      <div className="b-top">
        <img src={Logo} alt="logo" />
        <div className="tools">
          <img src={search} alt="search-icon" className="icon" />
          <img src={heart} alt="heart-icon" className="icon" />
          <img src={lightning} alt="lightning-icon" className="icon" />
        </div>
      </div>
      <div className="b-bottom">
        <ul>
          <li>Summary</li>
          <li>Activity</li>
        </ul>
      </div>
    </div>
  );
};

export default Bar;
