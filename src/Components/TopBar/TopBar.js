import React from "react";
import { Link } from "react-router-dom";
import "./TopBar.css";
import logoImage from "../../logo.png";

export default function TopBar() {
  return (
    <div className="mainTop">
      <nav>
        <img src={logoImage} alt="logo" className="logoImage" />
        <Link to="/home" className="links">
          Home
        </Link>
        <Link to="/biology" className="links">
          Biology
        </Link>
        <Link to="/chemistry" className="links">
          Chemistry
        </Link>
        <Link to="/physics" className="links">
          Physics
        </Link>
        <Link to="/math" className="links">
          Math
        </Link>
        <Link to="/economics" className="links">
          Economics
        </Link>
      </nav>
    </div>
  );
}
