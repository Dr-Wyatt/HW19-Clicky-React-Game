import React from "react";
import "./style.css";

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            The Clicky Game!
          </li>
          <li className="nav-item">
            
          </li>
          <li className="nav-item">
            Score: {props.score} | Top Score: "0"
          </li>
        </ul>
      </div>
    </nav>

  );
}

export default Navbar;
