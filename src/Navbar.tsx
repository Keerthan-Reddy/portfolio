import * as React from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faConnectdevelop } from "@fortawesome/free-brands-svg-icons";

function Navbar() {
  return (
    <div>
      <nav>
        <FontAwesomeIcon icon={faConnectdevelop} size="3x" color="#64ffda" />
        <ul>
          <li className="nav-list-item">
            <p className="nav-number">01.</p>
            <p className="nav-text">About</p>
          </li>
          <li className="nav-list-item">
            <p className="nav-number">02.</p>
            <p className="nav-text">Experience</p>
          </li>
          <li className="nav-list-item">
            <p className="nav-number">03.</p>
            <p className="nav-text">Work</p>
          </li>
          <li className="nav-list-item">
            <p className="nav-number">04.</p>
            <p className="nav-text">Contact</p>
          </li>
          <li className="nav-list-item">
            <button className="resume-button">Resume</button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Navbar;
