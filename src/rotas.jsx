import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Inicio from "./pages/inicio";
import Login from "./pages/login";         
import Cadastro from "./pages/cadastroPessoa"; 

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Inicio/>} path="/" />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastroPessoa" element={<Cadastro />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Rotas;