import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";

import Sidebar from "../components/template/Nav";
import Routes from "./Routes";

export default () => (
  <div className="app">
    <Sidebar />
    <Routes />
  </div>
);
