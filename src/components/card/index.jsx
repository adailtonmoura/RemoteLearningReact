import React from "react";
import "./index.css";

export default (props) => (
  <div className={`card ${props.cardType}`}>
    <div className="card-body">
      {props.children}
    </div>
  </div>
);
