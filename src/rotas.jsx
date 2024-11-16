import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Inicio from "@/App";           
import Login from "./pages/login";         
import Cadastro from "./pages/cadastroPessoa"; 

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastroPessoa" element={<Cadastro />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Rotas;