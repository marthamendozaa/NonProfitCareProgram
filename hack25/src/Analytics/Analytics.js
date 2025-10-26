import React from "react";
import Navbar from "../Navigation/NavbarLogged";
import "./Analytics.css";
import LineChart from "../graphs/Line";
import { registerCharts } from "../registerCharts";
import DoughnutChart from "../graphs/Doughnut";
import BarChart from "../graphs/Bar";


registerCharts();

export default function Analytics() {
  return (
    <>
      <Navbar />
      <div className="analytics-container">
        <div className="analytics-header">
          <h1 className="analytics-main-title">Analytics</h1>
          <div className="total-donated-box">
            <span className="total-label">Total Donated</span>
            <span className="total-amount">$ 20,439.44</span>
          </div>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <h3>Totals Donations Given</h3>
            <p className="stat-number">50</p>
          </div>
          <div className="stat-card">
            <h3>AVG Donation per NGO</h3>
            <p className="stat-number">$ 5,320.30</p>
          </div>
          <div className="stat-card">
            <h3>Impact per $1000</h3>
            <p className="stat-number">10 people supported</p>
          </div>
          <div className="stat-card">
            <h3>Number of NGOs supported</h3>
            <p className="stat-number">34</p>
          </div>
        </div>

        <div className="charts-grid">
          <div className="chart-section">
            <h3>Partnership Duration</h3>
            <div className="graph-container">

                <BarChart />

              </div>
          </div>
          <div className="chart-section">
            <h3>Donation Growth</h3>
              <div className="graph-container">

                <LineChart />

              </div>
            {/* <img src="/imgs/partnership-duration.png" alt="Partnership Duration Chart" /> */}
          </div>
          <div className="chart-section">
            <h3>Top Impact Areas</h3>
            <div className="graph-container">

                <DoughnutChart />

              </div>
          </div>
        </div>
      </div>
    </>
  );
}
