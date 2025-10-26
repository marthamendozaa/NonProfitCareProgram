import { Link, useNavigate } from "react-router-dom";
import './Login.css';
import users from "../users.json";
import { useState } from "react";
import Navbar from "../Navigation/Navbar";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Buscar usuario con las credenciales dadas
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) {
      alert("Invalid email or password");
      return;
    }

    // Redirigir según el valor de "money"
    if (user.money === "1") {
      navigate("/causes");  // Ruta si tiene dinero
    } else {
      navigate("/");  // Ruta si no tiene dinero
    }
  };


  return (
    <>
      <Navbar />
      <div className="container">
        <div className="left-section">
          <h1>Non Profit Care <br /> Program</h1>

          <form id="loginForm" onSubmit={handleSubmit}>
            <label htmlFor="accountNumber">Email</label>
            <input
              type="text"
              id="accountNumber"
              placeholder="donor@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="*******************"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <small><a href="#">Forgot your password or account number?</a></small>

            <button type="submit">Log in</button>
            <small>
              Don't have an account? <Link to="/select">Join our program</Link>
            </small>
          </form>
        </div>

        <div className="right-section">
          <img src={'/imgs/office.png'} alt="Office"/>
        </div>
      </div>
    </>
  )
}