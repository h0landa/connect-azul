import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Inicio from "./inicio";           
import Login from "./login";         
import Cadastro from "./cadastroPessoa"; 

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