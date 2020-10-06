import React from "react";
import "./Card.css";

export default (props) => (
  <div className="card disciplescard">
    <div className="card-body">
      <a href={`/disciplines/${props.id}`}>
        <h4 className="card-title">{props.name}</h4>
      </a>
      <p className="card-text">{props.teacher}</p>
      <p className="card-text">{props.openinghours}</p>
    </div>
  </div>
);
