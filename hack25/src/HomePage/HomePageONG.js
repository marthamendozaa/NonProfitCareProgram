import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navigation/Navbar";
import "./HomePageONG.css";

export default function HomePageONG() {
  return (
    <>
      <Navbar />
      <div className="HomeSpacer"></div>
      <div className="home-container">
        <div className="home-text-content">
          <h1 className="home-title">We know you care</h1>
          <p className="home-paragraph">
              We believe now is the time to be part of the change. With this purpose in mind, we’re driven to support companies and non-profit organizations by valuing inclusion, innovation, collaboration, and wellness to ensure every connection is impactful.
          </p>
        </div>

        <div className="home-image-content">
          <div className="home-buttons">
            <Link to="/select"><button>Join the Program</button></Link>
          </div>
          <img className="home-image" src={'/imgs/imgHome.jpg'} width="100%" height="100%"></img>
        </div>
      </div>
    </>
  );
}
