import React, { useState, useEffect } from "react";

import api from "../services/api";

import "../styles/homepage.css";
interface Disciplines {
  id: number;
  name: string;
  openinghours: string;
  teacher: string;
  created_at: string;
  updated_at: string;
}
export default function Disciplines() {
  const [disciplines, setDisciplines] = useState<Disciplines[]>([]);

  useEffect(() => {
    api
      .get("/discipline")
      .then(response => setDisciplines(response.data.disciplines));
  }, []);
  if (!disciplines) {
    return <p>Carregando...</p>;
  }
  return (
    <div className="disciplines">
      {disciplines.map((discipline) => {
        return (
          <div className="card">
            <div className="card-header">
              <h2>{discipline.name}</h2>
            </div>
            <div className="card-body">
              <h2>{discipline.teacher}</h2>
            </div>
            <div className="footer">
              <h2>{discipline.openinghours}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
}
