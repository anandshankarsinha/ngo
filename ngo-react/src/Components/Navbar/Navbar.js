import React from "react";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <h2>
          largerthan<i>i</i>
        </h2>
      </div>
      <div className="navbar-items">
        <li>Home</li>
        <li>About</li>
        <li>What We Do</li>
        <li>Media</li>
        <li>Contact</li>
      </div>
      <div className="navbar-button">
        <button className="navbar-btn">Donate</button>
      </div>
    </div>
  );
};

export default Navbar;
