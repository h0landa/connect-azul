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
  const [rua, setRua] = useState('');
  const [numero, setNumero] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [CEP, setCEP] = useState('');
  const [telefone, setTelefone] = useState('');
  const [site, setSite] = useState('');
  const [redesocial, setRedeSocial] = useState('');
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
      <Link to="/">
        <img src={imageSlogan} alt="Slogan" className="Slogan" />
      </Link>
    </div>
  
    <div className="white-box-cadastro">
      <form onSubmit={handleSubmit} className="form-container">
        <div>
          <input
            className='input-cadastroPessoa'
            type="text"
            value={nomeCompleto}
            onChange={(evento) => setNomeCompleto(evento.target.value)}
            placeholder='Nome da Clínica ou Hospital'
            required
          />
          <label>Digite o nome da Clínica ou Hospital</label>
        </div>
  
        <div>
          <input
            className='input-cadastroPessoa'
            type="text"
            value={cnpj}
            onChange={(evento) => setCnpj(evento.target.value)}
            placeholder='__.___.___/____-__'
            required
          />
          <label>Digite seu CNPJ</label>
        </div>
  
        <div>
          <input
            className='input-cadastroPessoa'
            type="text"
            value={rua}
            onChange={(evento) => setRua(evento.target.value)}
            placeholder='Rua Exemplo da Silva'
            required
          />
          <label>Digite sua rua</label>
        </div>
  
        <div className="inputs-row">
  <div className="half-width">
    <input className='input-cadastroPessoa' type="number" value={numero} onChange={(evento) => setNumero(evento.target.value)} placeholder='Número' required />
    <label>Digite o número</label>
  </div>

  <div className="half-width">
    <input className='input-cadastroPessoa' type="text" value={bairro} onChange={(evento) => setBairro(evento.target.value)} placeholder='Bairro' required />
    <label>Digite o bairro</label>
  </div>
</div>
  
        <div>
          <input
            className='input-cadastroPessoa'
            type="text"
            value={cidade}
            onChange={(evento) => setCidade(evento.target.value)}
            placeholder='Cidade'
            required
          />
          <label>Digite a cidade</label>
        </div>
  
        <div>
          <input
            className='input-cadastroPessoa'
            type="text"
            value={CEP}
            onChange={(evento) => setCEP(evento.target.value)}
            placeholder='__.___.___'
            required
          />
          <label>Digite seu CEP</label>
        </div>
  
        <div>
          <input
            className='input-cadastroPessoa'
            type="text"
            value={telefone}
            onChange={(evento) => setTelefone(evento.target.value)}
            placeholder='__.___.___'
            required
          />
          <label>Digite seu telefone</label>
        </div>
  
        <div>
          <input
            className='input-cadastroPessoa'
            type="url"
            value={site}
            onChange={(evento) => setSite(evento.target.value)}
            placeholder='http://www.exemplo.com'
            required
          />
          <label>Digite seu site</label>
        </div>
  
        <div>
          <input
            className='input-cadastroPessoa'
            type="url"
            value={redesocial}
            onChange={(evento) => setRedeSocial(evento.target.value)}
            placeholder='@exemplo'
            required
          />
          <label>Digite sua rede social</label>
        </div>
  
        <div>
          <input
            className='input-cadastroPessoa'
            type="email"
            value={email}
            onChange={(evento) => setEmail(evento.target.value)}
            placeholder='exemplo@gmail.com'
            required
          />
          <label>Digite seu email</label>
        </div>
  
        <div>
          <input
            className='input-cadastroPessoa'
            type="password"
            value={senha}
            onChange={(evento) => setSenha(evento.target.value)}
            placeholder='Senha'
            required
          />
          <label>Senha deve conter no mínimo 6 dígitos, uma letra minúscula e maiúscula e um caractere especial.</label>
        </div>
  
      </form>
  
    </div>
        <button className="submit" type="submit" style={{backgroundColor: "#407BFF", borderRadius: 15}}>Cadastrar</button>
      {mensagemErro && <p className='error-message'>{mensagemErro}</p>}
      <Link to="/login" className='link-login'>Já possui cadastro? Faça Login</Link>
  </div>
  
    
  );
};

export default CadastroPJ;