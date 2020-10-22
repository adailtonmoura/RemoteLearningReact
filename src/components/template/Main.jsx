import "./Main.css";
import React from "react";
import Sidebar from "./Nav";

export default (props) => (
  <React.Fragment>
    <Sidebar/>
    <main className="content container-fluid">{props.children}</main>
  </React.Fragment>
);
