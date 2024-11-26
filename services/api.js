import axios from "axios";
import './db_clinicas.json'

const api = axios.create({
    baseURL:"./db_clinicas.json",
    baseURL:"./db_pessoa.jason",
});

export default api;