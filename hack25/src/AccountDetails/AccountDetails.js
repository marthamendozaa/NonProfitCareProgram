import React from "react";
import "./AccountDetails.css";
import Navbar from "../Navigation/NavbarLogged";

export default function AccountDetails() {
  return (
    <>
      <Navbar />
      <div className="accountSpacer"></div>
      <div className="account-container">
        {/* LEFT SIDE */}
          <div className="account-left">
            <h1 className="page-title2">Account Details</h1>
            
            <div className="details">
              <div className="detail-row">
                <label>Organization Name</label>
                <p>WindPower Solutions Mexico AC</p>
              </div>

              <div className="detail-row">
                <label>Legal Representative Name</label>
                <p>Carlos Eduardo Martínez Torres</p>
              </div>

              <div className="detail-row">
                <label>Account Number</label>
                <p>W7845621 E39284 75102</p>
              </div>

              <div className="detail-row">
                <label>Password</label>
                <p>*********</p>
              </div>

              <div className="detail-row">
                <label>Tax Certificate</label><br/>
                <a style={{cursor: "pointer"}} target="_blank" rel="noreferrer">
                  windpower_certificate.pdf
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="account-right">
            <img
              src="/imgs/wind.png"
              alt="Organization visual"
              className="account-image"
            />
            <div className="description">
              <h2 className="description-title">Description</h2>
              <p>WindPower Solutions Mexico is a leading renewable energy company dedicated to harnessing the power of wind to generate clean, sustainable electricity. Our mission is to accelerate the transition to renewable energy while creating economic opportunities in local communities. Through innovative wind turbine technology and strategic partnerships, we're committed to powering a greener future for Mexico and beyond.</p>
            </div>
          </div>
      </div>
    </>
  );
}
