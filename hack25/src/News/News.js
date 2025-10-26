import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navigation/NavbarLogged";
import "./News.css";

export default function News() {
  return (
    <>
      <Navbar />
      <div className="spacer"></div>
      <div className="news-container">
        <div className="news-text-content">
          <h1 className="news-title">We know you care</h1>
          <p className="news-paragraph">
              We believe now is the time to revolutionize commerce globally. With this purpose in mind, we’re driven to support employees by valuing inclusion, innovation, collaboration, and wellness to ensure every person’s ability to participate in the global economy.
          </p>
        </div>

        <div className="news-image-content">
          <div className="news-buttons">
            <Link to="/select"><button>Join the Program</button></Link>
          </div>
          <img className="news-image" src={'/imgs/HomePageImage.png'} width="100%" height="100%"></img>
        </div>
      </div>
    </>
  );
}
