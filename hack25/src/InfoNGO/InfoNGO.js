import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navigation/NavbarLogged";
import "./InfoNGO.css";


export default function InfoNGO() {
  return (
    <>
      <Navbar />
      <div className="InfoSpacer"></div>
      <div className="info-container">
        <div className="info-table">
          <div className="row">
            <div className="col-wide">
              <h1 className="MainTitle"> Sustainable Roots Foundation </h1>
            </div>
            <div className="col-narrow"></div>
          </div>

          <div className="row">
            <div className="col-wide">
              <img src={'/imgs/InfoNGO.png'}/>
            </div>

            <div className="col-narrow">
              <div className="highlights-container">
                <h2 className="highlights">Highlights</h2>

                <ul className="table-highlights">
                  <li>
                    <span className="numberData">92%</span>
                    <span className="infoData">
                      of participating farms increased crop yields using sustainable energy-powered irrigation systems
                    </span>
                  </li>
                  <li>
                    <span className="numberData">18,400</span>
                    <span className="infoData">
                      families in rural areas have received fresh produce and sustainable farming training
                    </span>
                  </li>
                  <li>
                    <span className="numberData">67</span>
                    <span className="infoData">
                      solar-powered greenhouses and irrigation systems installed in farming communities
                    </span>
                  </li>
                  <li>
                    <span className="numberData">450</span>
                    <span className="infoData">
                      farmers trained in renewable energy farming techniques and sustainable agriculture
                    </span>
                  </li>
                  <li>
                    <span className="numberData">73%</span>
                    <span className="infoData">
                      reduction in energy costs for participating farms through solar and wind power adoption
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row-tag-donate">
            <div className="col-wide">
             <div className="tagName">
                 <h3 className="tagNametext">Hunger</h3>
              </div>
              <p className="tagParagraph">
                Food Bank Initiative is committed to fighting hunger while promoting sustainable farming practices powered by renewable energy. We empower rural farmers with green technology solutions, enabling them to grow more food efficiently and sustainably. Our mission is to bridge the gap between food scarcity and abundance by providing long-term solutions through sustainable farming education.
              </p>
            </div>
            <div className="col-narrow">
              <div className="div-donate-button">
                <Link to="/donate" className="donate-button">Donate</Link>
              </div>
            </div>
          </div>

          <div className="row image2-content">
            <img src={'/imgs/learn.png'} alt="Program" />
          </div>

          <div className="row text-impact">
            <h3>Impact</h3>
            <p>
              Since our establishment, Food Bank Initiative has revolutionized farming in 67 rural communities across Mexico. We've installed solar-powered irrigation systems, wind-powered grain storage facilities, and renewable energy-driven food processing centers. Our programs teach farmers how to harness clean energy to extend growing seasons, preserve harvests longer, and reduce post-harvest losses. Farmers learn to implement drip irrigation powered by solar panels, use wind energy for water pumping, and adopt sustainable composting techniques that reduce chemical fertilizer dependency while improving soil health.
            </p>
            <p>
              The transformation extends throughout entire communities. Participating farms have doubled their productivity while cutting energy costs by over 70%. We distribute surplus produce to food-insecure families, ensuring that over 18,000 people receive fresh, nutritious food monthly. Communities have established farmer cooperatives, created local jobs in renewable energy maintenance, and developed sustainable supply chains that connect rural producers to urban markets. Our alumni farmers are now training others, proving that green energy and sustainable agriculture can eliminate hunger while protecting our environment for future generations.
            </p>
          </div>

          <div className="row charts-row">
            <div className="chart-col">
              <img src={'/imgs/grafica.png'} alt="Farm Productivity Growth" />
            </div>
            <div className="chart-col">
              <img src={'/imgs/grafica.png'} alt="Families Fed Monthly" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
