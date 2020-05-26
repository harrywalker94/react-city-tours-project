import React from "react";
import logo from "../../logo.svg";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="city tours logo" />
      <ul className="nav-links">
        <li>
          <a href="/" className="nav-link active">
            Home
          </a>
        </li>
        <li>
          <a href="/" className="nav-link">
            About
          </a>
        </li>
        <li>
          <a href="/" className="nav-link">
            Cities
          </a>
        </li>
        <li>
          <a href="/" className="nav-link">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
