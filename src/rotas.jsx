import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Inicio from "./pages/inicio";
import Login from "./pages/login";         
import Cadastro from "./pages/cadastroPessoa"; 
import CadastroPJ from "./pages/cadastroPJ";

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Inicio/>} path="/" />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastroPessoa" element={<Cadastro />} />
                <Route element={<CadastroPJ/>} path="/cadastroPJ" />
            </Routes>
        </BrowserRouter>
    );
};

export default Rotas;