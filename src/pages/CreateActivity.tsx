import React, { FormEvent, useEffect, useState } from "react";
import api from "../services/api";
import Disciplines from "./Disciplines";

import "../styles/pages/create-activity.css";

interface Disciplines {
  id: number;
  name: string;
  openinghours: string;
  teacher: string;
  created_at: string;
  updated_at: string;
}

export default function CreateActivity() {
  const [disciplines, setDisciplines] = useState<Disciplines[]>([]);
  const [discipline, setDiscipline] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [description, setDescription] = useState("");
  useEffect(() => {
    api
      .get("discipline")
      .then((response) => setDisciplines(response.data.disciplines));
  }, []);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const data = new FormData();

    data.append("description", description);

    data.append("disciplines_id", discipline);
    data.append("delivery_date", deliveryDate);

    await api.post("activities/create", data);

    alert("Cadastro Realizado com sucesso");
  }

  return (
    <main className="create-activity">
      <form className="form-create-activity">
        <h1 className="title">Atividade</h1>
        <hr />
        <div className="input-block">
          <label htmlFor="disciplines">Disciplinas</label>
          <select
            name="disciplines"
            id="disciplines"
            onChange={(event) => setDiscipline(event.target.value)}
          >
            <option value="">Escolha a disciplina</option>
            {disciplines.map((discipline) => {
              return <option key={discipline.id}value={discipline.id}>{discipline.name}</option>;
            })}
          </select>
        </div>

        <div className="input-block">
          <label htmlFor="delivery-date">Data de entrega</label>
          <input
            type="text"
            className="delivery-date"
            value={deliveryDate}
            onChange={(event) => setDeliveryDate(event.target.value)}
          />
        </div>

        <div className="input-block">
          <label htmlFor="description">
            Descrição <span>(Máximo de 100 caracteres)</span>
          </label>
          <textarea
            id="description"
            maxLength={100}
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        <div className="input-block">
          <button type="submit" className="submitButton" onClick={handleSubmit}>
            Cadastrar
          </button>
        </div>
      </form>
    </main>
  );
}
