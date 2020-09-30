import React, { Component } from "react";

import api from "../services/api";
import Card from "./CardClasses";
import Content from "./template/Content"
import "./RemoteClass.css";

export default class RemoteClass extends Component {
  state = {
    remoteclass: [],
    discipline: "",
  };
  componentDidMount() {
    this.loadRemoteClasses();
    this.loadDiscipline();
  }
  loadRemoteClasses = async () => {
    const { id } = this.props.match.params;
    const response = await api.get(`api/discipline/${id}/classes`);
    this.setState({ remoteclass: response.data.data });
  };
  loadDiscipline = async () => {
    const { id } = this.props.match.params;
    const response = await api.get(`api/discipline/${id}`)
    this.setState({ discipline: response.data.discipline.name });
  }
  render() {
    return (
      <div className="remoteclasses">
        {this.state.remoteclass.map((remote) => (
          <Card
            key={remote.id}
            data={remote.date}
            content={remote.content}
            quantity={remote.quantity}
            plataform={remote.plataform}
          />
        ))}
      </div>
    );
  }
}
