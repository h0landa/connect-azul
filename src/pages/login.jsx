import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

// Styles
import "../styles/login.css";

// Assets
import imageSlogan from "../assets/Slogan.png";

// Validation Utilities
const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);


function Login() {
  // State Management
  const [loginData, setLoginData] = useState({
    username: "",
    password: ""
  });
  const [error, setError] = useState("");

  // Navigation Hook
  const navigate = useNavigate();

  // Input Change Handler
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLoginData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Form Submission Handler
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Fazendo a requisição ao servidor para autenticar
      const response = await axios.post(
        "http://localhost:8080/auth/generateToken",
        {
          username: loginData.username,
          password: loginData.password
        },
        {
          headers: {
            "Content-Type": "application/json" // Garantir que o conteúdo seja JSON
          }
        }
      );

      // Log da resposta do servidor
      console.log("Resposta do servidor:", response.data);

      // Se o token for gerado corretamente, armazená-lo no localStorage
      localStorage.setItem("token", response.data);

      // Redireciona para a tela principal
      navigate("/telaPrincipal");
    } catch (err) {
      console.error(err);
      setError("Login ou senha inválidos ou erro de conexão.");
    }
  };


  // Render Login Form
  const renderLoginForm = () => (
    <form onSubmit={handleSubmit}>
      <div className="white-box">
        <h1 className="bem-vindo">Bem-Vindo</h1>

        {renderInputField(
          "username",
          "Digite seu e-mail",
          "username",
          loginData.username
        )}

        {renderInputField(
          "password",
          "Digite sua senha",
          "password",
          loginData.password
        )}

        {error && <p className="error-message">{error}</p>}
      </div>

      <div className="form-actions">
        <Link to="/cadastroPessoa" className="cadastro">
          Não é usuário? Cadastre-se
        </Link>

        <button className="submit" type="submit">
          Avançar
        </button>
      </div>
    </form>
  );

  // Reusable Input Field Renderer
  const renderInputField = (name, placeholder, type, value) => (
    <label className="label-login">
      <input
        name={name}
        className="input-login"
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={handleInputChange}
        required
      />
    </label>
  );

  return (
    <div className="tela-login">
      <div className="slogan">
        <Link to="/">
          <img src={imageSlogan} alt="Slogan" className="Slogan" />
        </Link>
      </div>

      {renderLoginForm()}
    </div>
  );
}

export default Login;