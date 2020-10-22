import React from "react";
import {Link} from 'react-router-dom'

import "./NavLink.css";

export default (props) => (
  <Link to={props.link} style={{ textDecoration: "none" }}>
    {props.text}
  </Link>
);
