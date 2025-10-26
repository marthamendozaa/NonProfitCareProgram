import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Select.css";
import Navbar from "../Navigation/Navbar";

export default function SelectPage() {
  const [activePanel, setActivePanel] = useState(null);

  return (
    <>
      <Navbar />
      <div
        className="container"
        onMouseLeave={() => setActivePanel(null)}
      >
        <div
          className={`panel left ${activePanel === "left" ? "active" : ""}`}
          onMouseEnter={() => setActivePanel("left")} style={{ background: `url(${'/imgs/office.png'}) center/cover no-repeat` }}
        >
          <Link to="/register">
          <div className="overlay"></div>
          
          <div className="content">
            <h1>
              I am a <br />company seeking <br /> to help. <span className="arrow">→</span>
            </h1>
          </div></Link>
        </div>

        <div
          className={`panel right ${activePanel === "right" ? "active" : ""}`}
          onMouseEnter={() => setActivePanel("right")} style={{ background: `url(${'/imgs/wind.png'}) center/cover no-repeat` }}
        >
          <Link to="/register-non-profit">
          <div className="overlay"></div>
          <div className="content">
            <h1>
              I am a non profit
              <br />
              seeking to connect. <span className="arrow">→</span>
            </h1>
          </div></Link>
        </div>
      </div>
    </>
  );
}
