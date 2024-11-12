import React from "react";
import {Route, BrowseRouter} from "react-router-dom";

import Home from "../pages/home";
import Login from "../pages/login.jsx";
import Cadastro from "../pages/cadastroPessoa.jsx";

const Routes = () => {
    return (
<BrowseRouter>
        <Route Component={ Home } path="/inicio" />
        <Route Component={ Login } path="/login" />
        <Route Component={ Cadastro } path="/cadastroPessoa" />
</BrowseRouter>

    )

}

export default Routes;