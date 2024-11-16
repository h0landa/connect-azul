import React, { useState } from 'react';
import {Link} from 'react-router-dom';

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
    
  };

  return (
    <div>
      <h2>Cadastro</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
          <input type="text" value={nome} onChange={(evento) => setNome(evento.target.value)} required/>
          Nome
          </label>
        </div>
        <div>
          <label>
          <input type="email" value={email} onChange={(evento) => setEmail(evento.target.value)} required/>
          E-mail</label>
        </div>
        <div>
          <label>
          <input type="number" value={cpf} onChange={(evento) => setCpf(evento.target.value)} required /> 
          CPF
          </label> 
        </div>
        <div>
          <label>
          <input type="date" value={dataNascimento} onChange={(evento) => setDataNascimento(evento.target.value)} required />
          Data de Nascimento</label>
        </div>
        <div>
          <label>
          <input type="tel" value={telefone} onChange={(evento) => setTelefone(evento.target.value)} required/>
          Telefone </label>
        </div>
        <div>
          <label>
          <input type="password" value={senha} onChange={(evento) => setSenha(evento.target.value)} required/>
          Senha</label>
        </div>
        <div>
          <label>
          <input type="password" value={confirmacaoSenha} onChange={(evento) => setConfirmacaoSenha(evento.target.value)} required/>
          Confirmação de Senha</label>
        </div>
        <button type="submit">Cadastrar</button>
        <Link to="/login">Já possui cadastro? Faça Login</Link>
      </form>
    </div>
  );
};

export default Cadastro;