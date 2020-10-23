import axios from "axios";

const api = axios.create({
  baseURL: "https://damp-waters-69676.herokuapp.com/api",
});

export default api;