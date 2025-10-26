import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./HomePage/HomePageONG";
import InfoNGO from "./InfoNGO/InfoNGO";
import RegisterNGO from "./Register/RegisterNGO";
import Login from "./Login/Login";
import RegisterDonor from "./Register/RegisterDonor";
import SelectPage from "./Select/Select";
import Analytics from "./Analytics/Analytics";
import DonatePage from "./Donate/Donate";
import TransactionPage from "./Transaction/Transaction";
import PageCauses from "./PageCauses/PageCauses";
import AccountDetails from "./AccountDetails/AccountDetails";
import News from "./News/News";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/InfoNGO" element={<InfoNGO />} />
        <Route path="/register-non-profit" element={<RegisterNGO />} />
        <Route path="/register" element={<RegisterDonor />} />
        <Route path="/login" element={<Login />} />
        <Route path="/select" element={<SelectPage />} />
        <Route path="/causes" element={<PageCauses />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/account" element={<AccountDetails />} />
        <Route path="/donate" element={<DonatePage />} />
        <Route path="/transaction" element={<TransactionPage />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </div>
  );
}

export default App;
