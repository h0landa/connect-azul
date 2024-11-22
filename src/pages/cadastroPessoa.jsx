import React, { useState } from 'react';
import {Link} from 'react-router-dom';

import '../styles/cadastroPessoa.css'
import imageSlogan from '../assets/Slogan.png'

function Cadastro () {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmacaoSenha, setConfirmacaoSenha] = useState('');


  const handleSubmit = (evento) => {

    evento.preventDefault();
    //adicionar a lógica para cadastro
  }
  const handleChange = (event) => {
    setCpf(event.target.value);
    setError('');

  }


  return (

    <div className='tela-cadastroPessoa'>

      <div className='slogan'>
      <Link to="/"><img src={imageSlogan} alt="Slogan" className="Slogan" /></Link>
      </div>

      <div className="white-box-cadastroPessoa">
      <br/>
      <form onSubmit={handleSubmit}>
        <div>
          <label className='label-input-cadastroPessoa'>
          <input className='input-cadastroPessoa' type="text" value={nome} onChange={(evento) => setNome(evento.target.value)} placeholder='Nome completo'required/><br/>
          </label>
        </div>
        <div>
          <label className='label-input-cadastroPessoa'>
          <input className='input-cadastroPessoa' type="email" value={email} onChange={(evento) => setEmail(evento.target.value)} placeholder='E-mail' required/><br/>
          </label>
        </div>
        <div>
          <label className='label-input-cadastroPessoa'>
          <input className='input-cadastroPessoa' type="text" value={cpf} onChange={handleChange} placeholder='CPF' minLength={11} maxLength={11}  required /> <br/>
          </label> 
        </div>
        <div>
          <label className='label-input-cadastroPessoa'>
          <input className='input-cadastroPessoa' placeholder='Data de Nascimento' type="date" value={dataNascimento} onChange={(evento) => setDataNascimento(evento.target.value)} required /><br/>
          </label>
        </div>
        <div>
          <label className='label-input-cadastroPessoa'>
          <input className='input-cadastroPessoa' type="tel" value={telefone} onChange={(evento) => setTelefone(evento.target.value)} placeholder='Telefone' required/><br/>
          </label>
        </div>
        <div>
          <label className='label-input-cadastroPessoa'>
          <input className='input-cadastroPessoa' type="password" value={senha} onChange={(evento) => setSenha(evento.target.value)} placeholder='Senha' required/><br/>
          Senha deve conter no minimo 6 digitos, uma letra minúscula e maiúscula e um caractere especial.</label>
        </div>
        <div>
          <label className='label-input-cadastroPessoa'>
          <input className='input-cadastroPessoa' type="password" value={confirmacaoSenha} onChange={(evento) => setConfirmacaoSenha(evento.target.value)} placeholder='Confirme sua Senha' required/><br/>
          </label>
        </div>

      </form>
      </div>
      <Link to="/login" className='link-login'>Já possui cadastro? Faça Login</Link>
      <button className="submit-cadastroPessoa" type="submit">Cadastrar</button>
    </div>
  );
};

export default Cadastro;