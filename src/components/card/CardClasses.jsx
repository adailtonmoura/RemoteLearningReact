import React from "react";
import "./CardClasses.css";

// const date = new Date();
// const today = date.getDate();
// const currentMonth = date.getMonth();
// const currentYear = date.getFullYear();

// const currentDate = `${currentYear}-${currentMonth}-${today}`;

export default (props) => (
  <div className="card classescard">
    <div className="card-body">
      <p className="card-text">
        <strong>Assunto: {props.content}</strong>
      </p>

      <h4 className="card-title">{props.data}</h4>
      <p className="card-text">Quantidade: {props.quantity}</p>
      <p className="card-text">Plataforma: {props.plataform}</p>
    </div>
  </div>
);
