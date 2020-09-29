import React, { Component } from "react";
import "./Discipline.css";

import api from "../services/api";

import Card from "./Card";

export default class Discipline extends Component {
  state = {
    disciplines: [],
  };
  componentDidMount() {
    this.loadDisciplines();
  }
  loadDisciplines = async () => {
    const response = await api.get("api/discipline");
    console.log(response.data.disciplines);
    this.setState({ disciplines: response.data.disciplines });
  };

  render() {
    return (
      <div className="disciplines">
        {this.state.disciplines.map((discipline) => (
          <Card
            key={discipline.id}
            id={discipline.id}
            name={discipline.name}
            teacher={discipline.teacher}
          />
        ))}
      </div>
    );
  }
}
