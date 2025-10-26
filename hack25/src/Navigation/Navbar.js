// https://www.w3schools.com/howto/howto_js_topnav_responsive.asp?utm_source=chatgpt.com
import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => (

  <nav className="navbar">
    <Link to="/" className="navbar-logo">
      <img src="/imgs/logoCapOne.png" alt="Capital One"/>
    </Link>
    

    <input type="checkbox" className="nav-toggle" />
    <label htmlFor="nav-toggle" className="hamburger">
      <span></span><span></span><span></span>
    </label>

    <div className="nav-panel">
      <ul className="nav-links">
        <li><a style={{ cursor: "pointer" }}>Credit Cards</a></li>
        <li><a style={{ cursor: "pointer" }}>Checkings & Savings</a></li>
        <li><a style={{ cursor: "pointer" }}>Auto</a></li>
        <li><a style={{ cursor: "pointer" }}>Business</a></li>
        <li><a style={{ cursor: "pointer" }}>Commercial</a></li>
        <li><a style={{ cursor: "pointer" }}>Benefits & Tools</a></li>
      </ul>

      <div className="navbar-left">
        <Link to="/login" className="login-button">Log In</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
