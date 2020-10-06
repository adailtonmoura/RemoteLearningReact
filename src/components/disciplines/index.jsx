import React, { Component } from "react";
import "./index.css";

import api from "../../services/api";

import Main from "../template/Main";
import Card from "../card/index";

const headerProps = {
  title: "Disciplinas",
};

export default class Discipline extends Component {
  state = {
    disciplines: [],
  };

  componentDidMount() {
    this.loadDisciplines();
  }

  loadDisciplines = async () => {
    const response = await api.get("api/discipline");
    this.setState({ disciplines: response.data.disciplines });
  };

  render() {
    return (
      <Main {...headerProps}>
        <div className="disciplines">
          {this.state.disciplines.map((discipline) => (
            <Card key={discipline.id} cardType="disciplinescard">
              <a href={`/disciplines/${discipline.id}`}>
                <h4 className="card-title">{discipline.name}</h4>
              </a>
              <p className="card-text">{discipline.teacher}</p>
              <p className="card-text">{discipline.openinghours}</p>
            </Card>
          ))}
        </div>
      </Main>
    );
  }
}
