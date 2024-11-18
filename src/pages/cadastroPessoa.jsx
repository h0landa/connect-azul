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
          <input className='input-cadastroPessoa' type="text" value={nome} onChange={(evento) => setNome(evento.target.value)} placeholder='Digite seu nome'required/><br/>
          Nome
          </label>
        </div>
        <div>
          <label className='label-input-cadastroPessoa'>
          <input className='input-cadastroPessoa' type="email" value={email} onChange={(evento) => setEmail(evento.target.value)} placeholder='exemplo@gmail.com' required/><br/>
          E-mail</label>
        </div>
        <div>
          <label className='label-input-cadastroPessoa'>
          <input className='input-cadastroPessoa' type="text" value={cpf} onChange={handleChange} placeholder='000.000.000-00' minLength={11} maxLength={11}  required /> <br/>
          CPF
          </label> 
        </div>
        <div>
          <label className='label-input-cadastroPessoa'>
          <input className='input-cadastroPessoa' type="date" value={dataNascimento} onChange={(evento) => setDataNascimento(evento.target.value)} required /><br/>
          Data de Nascimento</label>
        </div>
        <div>
          <label className='label-input-cadastroPessoa'>
          <input className='input-cadastroPessoa' type="tel" value={telefone} onChange={(evento) => setTelefone(evento.target.value)} placeholder='(99) 99999-9999' required/><br/>
          Telefone </label>
        </div>
        <div>
          <label className='label-input-cadastroPessoa'>
          <input className='input-cadastroPessoa' type="password" value={senha} onChange={(evento) => setSenha(evento.target.value)} placeholder='**********' required/><br/>
          Senha</label>
        </div>
        <div>
          <label className='label-input-cadastroPessoa'>
          <input className='input-cadastroPessoa' type="password" value={confirmacaoSenha} onChange={(evento) => setConfirmacaoSenha(evento.target.value)} placeholder='**********' required/><br/>
          Confirmação de Senha</label>
        </div>

      </form>
      </div>
      <Link to="/login" className='link-login'>Já possui cadastro? Faça Login</Link>
      <button className="submit-cadastroPessoa" type="submit">Cadastrar</button>
    </div>
  );
};

export default Cadastro;