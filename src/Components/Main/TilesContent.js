import React from "react";
import Tile from "./Tile";

import "./TilesContent.css";
import Thumbnail1 from "./thumbnail1.png";
import Thumbnail2 from "./thumbnail2.png";

const TilesContent = () => {
  return <div className="tiles-content-container">
      <Tile thumbnail={Thumbnail1} title="Ten kurs jest ciekawy, odpal i zrozumiesz"/>
      {/*<Tile thumbnail ={Thumbnail2} title="Działania na liczbach i ich kolejność wykonywania" />*/}
  </div>;
};

export default TilesContent;
