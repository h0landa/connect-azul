import axios from "axios";
import './db_clinicas.json'

const api = axios.create({
    baseURL:"./db_clinicas.json",
});

export default api;