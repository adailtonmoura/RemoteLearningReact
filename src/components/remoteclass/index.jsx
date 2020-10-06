import React, { Component } from "react";

import api from "../../services/api";
import Card from "../card/index";
import Main from "../template/Main";
import "./index.css";

export default class RemoteClass extends Component {
  state = {
    remoteclass: [],
    discipline: "",
  };
  componentDidMount() {
    this.loadDiscipline();
    this.loadRemoteClasses();
  }
  loadRemoteClasses = async () => {
    const { id } = this.props.match.params;
    const response = await api.get(`api/discipline/${id}/classes`);
    this.setState({ remoteclass: response.data.data });
  };
  loadDiscipline = async () => {
    const { id } = this.props.match.params;
    const response = await api.get(`api/discipline/${id}`);
    this.setState({ discipline: response.data.discipline.name });
  };
  render() {
    return (
      <Main title={this.state.discipline}>
        <div className="remoteclasses">
          {this.state.remoteclass.map((remote) => (
            <Card key={remote.id} cardType="classescard">
              <p className="card-text">
                <strong>Assunto: {remote.content}</strong>
              </p>

              <h4 className="card-title">{remote.data}</h4>
              <p className="card-text">Quantidade: {remote.quantity}</p>
              <p className="card-text">Plataforma: {remote.plataform}</p>
            </Card>
          ))}
        </div>
      </Main>
    );
  }
}
