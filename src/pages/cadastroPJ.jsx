import React, { useState } from 'react';
import {Link} from 'react-router-dom';

import '../styles/cadastroPJ.css'
import imageSlogan from '../assets/Slogan.png'

function CadastroPJ () {
  const [rsocial, setRsocial] = useState('');
  const [email, setEmail] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmacaoSenha, setConfirmacaoSenha] = useState('');
  const [mensagemErro, setMensagemErro] = useState ('');


  const handleSubmit = (evento) => {

    evento.preventDefault();
    //adicionar a lógica para cadastro
      if (senha !== confirmacaoSenha) {
        setMensagemErro('Senhas não coincidem!')
      } else ('')
  }


  return (

    <div className='tela-cadastroPessoa'>

      <div className='slogan'>
      <Link to="/"><img src={imageSlogan} alt="Slogan" className="Slogan" /></Link>
      </div>

      <div className="white-box-cadastro">
      <br/>
      <form onSubmit={handleSubmit}>
        <div>
          <label className='label-input-cadastroPessoa'>
          <input className='input-cadastroPessoa' type="text" value={rsocial} onChange={(evento) => setRsocial(evento.target.value)} placeholder='Razão Social'required/><br/>
          </label>
        </div>
        <div>
          <label className='label-input-cadastroPessoa'>
          <input className='input-cadastroPessoa' type="email" value={email} onChange={(evento) => setEmail(evento.target.value)} placeholder='E-mail' required/><br/>
          </label>
        </div>
        <div>
          <label className='label-input-cadastroPessoa'>
          <input className='input-cadastroPessoa' type="text" value={cnpj} onChange={(evento) => setCnpj(evento.target.value)} placeholder='CNPJ' minLength={11} maxLength={11}  required /> <br/>
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
      {mensagemErro && <p style={{ color: 'red' }}>{mensagemErro}</p>}
      <Link to="/login" className='link-login'>Já possui cadastro? Faça Login</Link>
      <button className="submit" type="submit">Cadastrar</button>
    </div>
  );
};

export default CadastroPJ;