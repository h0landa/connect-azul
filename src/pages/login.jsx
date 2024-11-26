import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

// Styles
import "../styles/login.css";

// Assets
import imageSlogan from "../assets/Slogan.png";

// Validation Utilities
const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
const validatePassword = (password) => password.length >= 6;

function Login() {
  // State Management
  const [loginData, setLoginData] = useState({
    email: "",
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
    
    // Input Validations
    if (!validateEmail(loginData.email)) {
      setError("Por favor, insira um email válido.");
      return;
    }

    if (!validatePassword(loginData.password)) {
      setError("A senha deve ter pelo menos 6 caracteres.");
      return;
    }

    try {
      // Server Request
      const response = await axios.get("http://localhost:3000/Pessoa", {
        params: { 
          email: loginData.email, 
          password: loginData.password 
        }
      });

      const user = response.data.find(
        (pessoa) => 
          pessoa.email === loginData.email && 
          pessoa.password === loginData.password
      );

      if (user) {
        // Successful Login
        navigate("/telaPrincipal");
      } else {
        setError("Login ou senha inválidos");
      }
    } catch (err) {
      console.error(err);
      setError("Erro ao conectar ao servidor. Tente novamente mais tarde.");
    }
  };

  // Render Login Form
  const renderLoginForm = () => (
    <form onSubmit={handleSubmit}>
      <div className="white-box">
        <h1 className="bem-vindo">Bem-Vindo</h1>
        
        {renderInputField(
          "email", 
          "Digite seu e-mail", 
          "email", 
          loginData.email
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