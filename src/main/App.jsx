import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";

import Sidebar from "../components/template/Sidebar";
import Content from "../components/template/Content";

export default () => (
  <div className="app">
    <Sidebar />
    <Content />
  </div>
);
