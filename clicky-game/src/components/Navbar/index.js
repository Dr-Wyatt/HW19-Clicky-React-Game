import React from "react";
import "./style.css";

function Navbar(props) {
  return (
    <nav className="nav navbar navbar-expand-lg justify-content-center bg-dark">
      <li className="nav-item text-primary mr-5 ">
        <h1>The Clicky Game!</h1>
      </li>
      <ul className="nav">
        <li className="nav-item text-light">
          <h2>Score: {props.score} | Top Score: {props.topScore}</h2>
        </li>
      </ul>
    </nav>

  );
}

export default Navbar;
