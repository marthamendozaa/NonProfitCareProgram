import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import causesData from "../causes.json";
import "./PageCauses.css"; 
import Navbar from "../Navigation/NavbarLogged";

export default function PageCauses() {
  document.body.style.backgroundColor = '#F9FDFF';
  const filters = [
    "Infrastructure", "Community", "Hunger",
    "Education", "Sustainability", "Refugees", "Humanitarian"
  ];

  const Logo = "/imgs/logoCapOne.png";

  const causes = causesData;
  /*const causes = [
    { img: "/imgs/img1.jpg", tags: ["Community", "Education"], name: "Hola Martha Learn Together" },
    { img: "/imgs/img2.jpg", tags: ["Hunger", "Humanitarian"], name: "OMS, more like, OMG" },
    { img: "/imgs/img3.jpg", tags: ["Infrastructure", "Sustainability"], name: "Angie besties with Olive R" },
    { img: "/imgs/img4.jpg", tags: ["Refugees", "Community"], name: "OMS Learn Together" },
    { img: "/imgs/img5.jpg", tags: ["Education", "Infrastructure"], name: "OMS Learn Together" },
    { img: "/imgs/img6.jpg", tags: ["Sustainability", "Hunger"], name: "OMS Learn Together" },
  ];*/

  // Estado para filtros seleccionados y búsqueda
  const [activeFilters, setActiveFilters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Función para alternar filtros
  const toggleFilter = (filter) => {
    setActiveFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter]
    );
  };

  // Filtrar las causas según los filtros seleccionados y el término de búsqueda
  const filteredCauses = causes.filter(({ name, tags }) => {
    const matchesSearch = name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilters = activeFilters.every((filter) => tags.includes(filter));
    return matchesSearch && (activeFilters.length === 0 || matchesFilters);
  });

  const location = useLocation();
  const navigate = useNavigate(); 

  return (
    <>
      <Navbar />
      <div className="spacerCauses"></div>
      {/* TITLE */}
      <div className="page-title">
        <h1>Choose your cause</h1>
      </div>

      {/* SEARCH BAR */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by cause name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* FILTER BUTTONS */}
      <div className="filters-container">
        {filters.map((filter) => {
          const isActive = activeFilters.includes(filter);
          return (
            <button
              key={filter}
              onClick={() => toggleFilter(filter)}
              className={`filter-btn ${isActive ? "active" : ""}`}
            >
              {filter}
            </button>
          );
        })}
      </div>

      {/* GRID */}
      <div className="causes-grid">
        {filteredCauses.map(({ img, tags, name }, i) => (
          <div
            key={i}
            className="cause-card"
            onClick={() => navigate("/infoNGO")} // 🔹 Redirección al hacer clic
            style={{ cursor: "pointer" }} // Opcional
          >
            <img src={img} alt={name} className="cause-img" />
            <div className="cause-content">
              <h3>{name}</h3>
              <div className="cause-tags">
                {tags.map((tag, idx) => (
                  <span key={idx} className="cause-tag">
                    {tag}
                  </span>
                ))}
              </div>
              <span className="learn-more">Learn more →</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
