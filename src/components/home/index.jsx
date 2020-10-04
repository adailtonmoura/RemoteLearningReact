import React, { Component } from "react";
import "./styles.css";

import Main from "../template/Main";
import api from "../../services/api";

const headerProps = {
  title: "Home",
};
export default class Home extends Component {
  state = {
    remoteclass: [],
  };
  componentDidMount() {
    this.loadRemoteClassesToday();
  }
  loadRemoteClassesToday = async () => {
    const response = await api.get(`api/class/today`);
    console.log(response.data.classes);
    this.setState({ remoteclass: response.data.classes });
  };
  render() {
    return (
      <Main {...headerProps}>
        <div className="schedules"></div>
      </Main>
    );
  }
}
