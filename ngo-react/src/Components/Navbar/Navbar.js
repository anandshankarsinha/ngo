import React from "react";
import "./navbar.css";
// import { Link } from "react-router-dom";
// import { Navigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
const Navbar = () => {
  // <Navigate to="/dashboard" replace={true} />
  // const navigate = useNavigate();
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <h2>
          largerthan<i>i</i>
        </h2>
      </div>
      <div className="navbar-items">
        <li> <a href="/">Home</a>
        </li>
        <li><a href="/about">About</a></li>
        <li> <a href="/whatwedo">What We Do</a></li>
        <li><a href="/media">Media</a></li>
        <li><a href="/contact">Contact</a></li>
      </div>
      <div className="navbar-button">
        <button className="navbar-btn">Donate</button>
      </div>
    </div>
  );
};

export default Navbar;
