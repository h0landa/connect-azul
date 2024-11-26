import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../styles/login.css";
import imageSlogan from "../assets/Slogan.png";
import imageElipse from "../assets/Ellipse.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const emailValido = (email) => /\S+@\S+\.\S+/.test(email);
  const senhaValida = (password) => password.length >= 10;

  const handleSubmit = async (evento) => {
    evento.preventDefault();

    // Validações de entrada
    if (!emailValido(email)) {
      setError("Por favor, insira um email válido.");
      return;
    }

    if (!senhaValida(password)) {
      setError("A senha deve ter pelo menos 6 caracteres.");
      return;
    }

    try {
      // Requisição ao servidor
      const requisicao = await axios.get("http://localhost:3000/Pessoa", {
        params: { email, password },
      });

      const user = requisicao.data.find(
        (Pessoa) => Pessoa.email === email && Pessoa.password === password
      );

      if (user) {
        // Salva o token no localStorage e redireciona
       // localStorage.setItem("authToken", user.token);
        navigate("/telaPrincipal");
      } else {
        setError("Login ou senha inválidos");
      }
    } catch (err) {
      console.error(err);
      setError("Erro ao conectar ao servidor. Tente novamente mais tarde.");
    }
  };

  return (
    <div className="tela-login">
      <div className="slogan">
        <Link to="/">
          <img src={imageSlogan} alt="Slogan" className="Slogan" />
        </Link>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="white-box">
          <h1 className="bem-vindo">Bem-Vindo</h1>
          <label className="label-login">
            <input
              className="input-login"
              placeholder="Digite seu e-mail"
              type="email"
              value={email}
              onChange={(evento) => setEmail(evento.target.value)}
              required
            />
            <br />
          </label>
          <br />
          <label className="label-login">
            <input
              className="input-login"
              placeholder="Digite sua senha"
              type="password"
              value={password}
              onChange={(evento) => setPassword(evento.target.value)}
              required
            />
            <br />
          </label>
          <br />

          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>

        <Link to="/cadastroPessoa" className="cadastro">
          Não é usuário? Cadastre-se
        </Link>
        <br />
        <button className="submit" type="submit">
          Avançar
        </button>
      </form>
    </div>
  );
}

export default Login;
