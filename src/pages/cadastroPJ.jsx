import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import '../styles/cadastroPJ.css'
import imageSlogan from '../assets/Slogan.png'

function CadastroPJ () {
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmacaoSenha, setConfirmacaoSenha] = useState('');
  const [mensagemErro, setMensagemErro] = useState ('');
  const [roles, setRoles] = useState('USER');
  const [usuario_id, setUsuarioId] = useState('');


  const handleSubmit = async (evento) => {

    evento.preventDefault();
      if (senha !== confirmacaoSenha) {
        setMensagemErro('Senhas não coincidem!')
      } else ('')
      const contato = {telefone}
      const usuario_pj = {nome, email, senha, roles}

     

      try {
        const response_user = await axios.post('http://localhost:8080/auth/register', usuario_pj);
        const userId = response_user.data.id;
        console.log(`USUARIO ID: ${userId}`);
        setUsuarioId(userId);
      } catch(erro) {
        console.error('Erro ao enviar os dados:', erro);
        setError('Erro ao cadastrar. Tente novamente mais tarde.');
      }

      const empresa = {nomeCompleto, cnpj,usuario_id, contato}

      console.log(empresa);

      const token = localStorage.getItem('token');
      const response = await axios.post('http://localhost:8080/api/clinicas/novo', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        empresa, // Usa os parâmetros condicionais
        withCredentials: true,
    });
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
          <input className='input-cadastroPessoa' type="text" value={nomeCompleto} onChange={(evento) => setNomeCompleto(evento.target.value)} placeholder='Razão Social'required/><br/>
          </label>
        </div>
        <div>
          <label className='label-input-cadastroPessoa'>
          <input className='input-cadastroPessoa' type="nome-usuario" value={nome} onChange={(evento) => setNome(evento.target.value)} placeholder='Nome usuário' required/><br/>
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
        <button className="submit" type="submit">Cadastrar</button>
      </form>
      </div>
      {mensagemErro && <p style={{ color: 'red' }}>{mensagemErro}</p>}
      <Link to="/login" className='link-login'>Já possui cadastro? Faça Login</Link>
      
    </div>
  );
};

export default CadastroPJ;