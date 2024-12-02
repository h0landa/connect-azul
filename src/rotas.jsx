import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Inicio from "./pages/inicio";
import Login from "./pages/login";         
import Cadastro from "./pages/cadastroPessoa"; 
import CadastroPJ from "./pages/cadastroPJ";
import TelaPrincipal from "./pages/telaPrincipal.jsx";
import Pesquisa from "./pages/telaPesquisa";
import TelaPerfilClinica from "./pages/telaPerfilClinica";

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Inicio/>} path="/" />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastroPessoa" element={<Cadastro />} />
                <Route path="/pesquisa" element={<Pesquisa />} />
                <Route element={<CadastroPJ/>} path="/cadastroPJ" />
                <Route element={<TelaPrincipal/>} path="/telaPrincipal" />
                <Route element={<TelaPerfilClinica/>} path="/telaPerfilClinica" />
            </Routes>
        </BrowserRouter>
    );
};

export default Rotas;