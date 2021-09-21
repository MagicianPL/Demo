import React from "react";

import "./Tile.css";
import IconLevel from "./icon-level.png";
import IconHeart from "./icon-heart.png";

const Tile = ({ thumbnail, title }) => {
  return (
    <div className="tile">
      <div className="flex-container">
        <div>
          <img className="thumbnail" src={thumbnail} alt="thumbnail" />
        </div>
        <div className="tile-icons">
          <img src={IconLevel} />
          <img src={IconHeart} />
        </div>
      </div>
      <p className="tile-title">{title}</p>
      <p className="desc">
        Stretch your analytic muscles with knights, knaves, Kukpon logic gates,
        and more!
      </p>
    </div>
  );
};

export default Tile;
