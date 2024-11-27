import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/cadastroPessoa.css';
import imageSlogan from '../assets/Slogan.png';

function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmacaoSenha, setConfirmacaoSenha] = useState('');
  const [error, setError] = useState('');
  const [successo, setSuccesso] = useState(false);
  const [roles, setRoles] = useState('USER');

  const validarCPF = (cpf) => {
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;
    let soma = 0, resto;
    for (let i = 1; i <= 9; i++) soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.substring(9, 10))) return false;
    soma = 0;
    for (let i = 1; i <= 10; i++) soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    return resto === parseInt(cpf.substring(10, 11));
  };


  const handleSubmit = async (evento) => {
    evento.preventDefault();

    if (senha !== confirmacaoSenha) {
      setError('As senhas não coincidem.');
      return;
    }

    // Preparar os dados para envio
    const usuario = { nome, email, senha, roles};
    console.log('Corpo da requisição:', usuario);
    try {
      const response = await axios.post('http://localhost:8080/auth/register', usuario);
      console.log('Resposta do servidor:', response.data);
      setSuccesso(true);
      setError('');
      
        setTimeout(() => {
           navigate('/login');
              }, 3000);

    } catch (erro) {
      console.error('Erro ao enviar os dados:', erro);
      setError('Erro ao cadastrar. Tente novamente mais tarde.');
    }
  };

  return (
    <div className="tela-cadastroPessoa">
      <div className="slogan">
        <Link to="/"><img src={imageSlogan} alt="Slogan" className="Slogan" /></Link>
      </div>
      <div className="white-box-cadastroPessoa">
        <br />
        <form onSubmit={handleSubmit}>
          
            <label className="label-input-cadastroPessoa">
              <input className="input-cadastroPessoa" type="text" value={nome} onChange={(evento) => setNome(evento.target.value)} placeholder="Nome usuário" required /><br />
            </label>
          
          
            <label className="label-input-cadastroPessoa">
              <input className="input-cadastroPessoa" type="email" value={email} onChange={(evento) => setEmail(evento.target.value)} placeholder="E-mail" required /><br />
            </label>
          
          
            <label className="label-input-cadastroPessoa">
              <input className="input-cadastroPessoa" type="password" value={senha} onChange={(evento) => setSenha(evento.target.value)} placeholder="Senha" minLength={6} required /><br />
            </label>
            <div className='alerta-senha'>
            Senha deve conter no mínimo 10 dígitos, uma letra minúscula,
             uma maiúscula e um caractere especial.
            </div>
          
          
            <label className="label-input-cadastroPessoa">
              <input className="input-cadastroPessoa" type="password" value={confirmacaoSenha} onChange={(evento) => setConfirmacaoSenha(evento.target.value)} placeholder="Confirme sua Senha" required /><br />
            </label>
          
          {error && <div className="error-message">{error}</div>}
          {successo && <div className="successo-message">Cadastro realizado com sucesso!</div>}
          <button className="submit-cadastroPessoa" type="submit">Cadastrar</button>
        </form>
      </div>
      <Link to="/login" className="link-login">Já possui cadastro? Faça Login</Link>
    </div>
  );
}

export default Cadastro;
