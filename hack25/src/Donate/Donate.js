import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navigation/NavbarLogged";
import "./Donate.css";

export default function Donate() {
  const [showText, setShowText] = useState(true); 
  const [quantity, setQuantity] = useState("");

  return (
    <>
      <Navbar />
      <div className="donateSpacer"></div>

      <div className="donate-container">
        
        <div className="row-left">
            <h1 className="title_donate"> Sustainable Roots Foundation </h1>
                <div className="text_all">
                    <div className="title_donate-container">
                        <p> Thank you for donating! Your contribution helps us move closer to our mission and make a difference where it truly matters. </p>
                    </div>

                    {showText ? (
                    <div className="text_that_will_hide">


                        <div className="first_input_container">
                            <h3 className="title_quantity">Quantity</h3>
                            <input
                            type="text"
                            className="input_quantity"
                            placeholder="Enter quantity..."
                            value={quantity}             
                            onChange={(e) => setQuantity(e.target.value)}
                            />
                        </div>

                        <div className="second_input_container">
                            <h3 className="title_bank_account">Bank Account</h3>
                            <input
                                type="text"
                                className="input_bank_account"
                                placeholder="Enter bank account..."
                            />                    </div>

                        <div className="div-pay-button">
                            <button
                                className="pay-button"
                                onClick={() => setShowText(false)}
                            >
                                Donate
                            </button>
                        </div>
                    </div>
                    ) : (

                        <div className="thankyou-container">
                        <h2 className="nameCompany">WindPower Solutions Mexico AC just donated!</h2>
                        <p className="thankyou-text">
                            Your support helps us continue our mission. You'll receive a
                            confirmation email shortly.
                        </p>
                        <div className="things_centered">
                            <h2 className="donationMoney">
                                ${""}
                                {Number(quantity).toLocaleString("en-US", {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                                })}
                            </h2>
                            <img src={'/imgs/heartIcon.png'}/>
                            <h2 className="thankyou-text2">THANKS FOR BEING PART OF THE CHANGE.</h2>
                            </div>
                        </div>
                    )}
                </div>    
       </div>

        <div className="row-right">
            <div className="title_donate-container">
                <img className="imageheart" src={'/imgs/InfoNGO.png'}/>
            </div>
            
       </div>
      </div>
    </>
  );
}
