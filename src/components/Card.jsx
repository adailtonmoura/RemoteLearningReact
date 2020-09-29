import React from "react";
import "./Card.css";

export default (props) => (
  <div className="card">
    <div className="card-body">
      <a href="">
        <h4 className="card-title">
          {props.name} - {props.id}
        </h4>
      </a>
      <p className="card-text">{props.teacher}</p>
    </div>
  </div>
);
