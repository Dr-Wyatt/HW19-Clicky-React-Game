import React from "react";
import "./style.css";

function Tiles(props) {


  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} onClick={props.handleIncrement}/>
      </div>
    </div>
  );
}

export default Tiles;