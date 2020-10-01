import React from "react";

import "./NavLink.css";

export default (props) => (
  <a href={props.link} style={{ textDecoration: "none" }}>
    <i className={props.icon} aria-hidden="true"></i>
  </a>
);
