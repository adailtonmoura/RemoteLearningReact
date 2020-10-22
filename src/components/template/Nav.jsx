import React from "react";
import "./Nav.css";

import NavLink from "./NavLink";

export default () => (
  <aside className="sidebar shadow-sm">
    <NavLink link="/" text="Home" />
    <NavLink link="/disciplines" text="Aulas"/>
  </aside>
);
