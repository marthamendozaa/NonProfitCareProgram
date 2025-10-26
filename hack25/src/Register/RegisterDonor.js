import { Link, useNavigate } from "react-router-dom";
import './Register.css';
import Navbar from "../Navigation/Navbar";
import { useState } from "react";

export default function RegisterDonor() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password || !confirm) {
      alert("Please fill out all fields.");
      return;
    }
    if (password !== confirm) {
      alert("Passwords do not match.");
      return;
    }

    // Obtener usuarios previos del localStorage
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Crear el nuevo usuario (money = 1 -> donor)
    const newUser = { email, password, money: "1" };

    // Guardar en localStorage
    localStorage.setItem("users", JSON.stringify([...storedUsers, newUser]));

    alert("Registration successful!");
    navigate("/causes");
  };


  return (
    <>
      <Navbar />
      <div className="container">
        <div className="left-section">
          <h1>Non Profit Care <br /> Program</h1>

          <form id="loginForm" onSubmit={handleSubmit}>
            <label htmlFor="accountName">Account Name</label>
            <input type="text" id="accountName" placeholder="Organization Name" />

            <label htmlFor="accountNumber">Email</label>
            <input
              type="text"
              id="accountNumber"
              placeholder="donor@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <small>
              Don't have an account? <a href="https://www.capitalone.com/commercial/industry-expertise/non-profit-organizations/" target="_blank">Create a bank account with Capital One</a>
            </small>

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="*******************"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="confirm">Confirm Password</label>
            <input
              type="password"
              id="confirm"
              placeholder="*******************"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
            />

            <button type="submit">Join the Community</button>
            <small>
              Already part of the program? <Link to="/login">Log in</Link>
            </small>
          </form>
        </div>

        <div className="right-section">
          <img src={"/imgs/office.png"} alt="Wind turbine field" />
        </div>
      </div>
    </>
  );
}
