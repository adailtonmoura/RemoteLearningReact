import React from "react";
import "./Nav.css";

import NavLink from "./NavLink";

export default () => (
  <aside className="sidebar shadow-sm">
    <NavLink link="/" icon="fa fa-home" />
    <NavLink link="/atividades" icon="fa fa-book" />
    <NavLink link="/atividades" icon="fas fa-users-class" />
  </aside>
);
