import React from "react";

import { Link } from "react-router-dom";

import "../styles/pages/homepage.css";

export default function homepage() {
  return (
    <div className="home-page">
      <div className="card">
        <div className="card-body">
          <Link to="discipline">Disciplinas</Link>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <Link to="activities">Atividades</Link>
        </div>
      </div>
    </div>
  );
}
