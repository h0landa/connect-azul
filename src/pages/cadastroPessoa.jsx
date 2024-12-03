import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/cadastroPessoa.css';
import imageSlogan from '../assets/Slogan.png';
import InputMask from 'react-input-mask';

function Cadastro() {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [data, setData] = useState('');
  const [telefone, setTelefone] = useState('');
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [cep, setCep] = useState("");
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
      const response = await axios.post('http://localhost:8080/api/pacientes/novo', usuario);
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

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  };

  return (
    <div className="tela-cadastroPessoa">
      <div className="slogan">
        <Link to="/"><img src={imageSlogan} alt="Slogan" className="Slogan" /></Link>
      </div>

      <div className="white-box-cadastro">
        <form onSubmit={handleSubmit} className="form-container">
          <div>
              <label>Digite seu nome completo</label>
              <input  className="input-cadastroPessoa" type="text" value={nome} onChange={(evento) => setNome(evento.target.value)} placeholder="Nome usuário" required />
          </div>
          
          <div>
          <label>Digite seu CPF</label>
              <InputMask mask="999.999.999-99" className="input-cadastroPessoa" type="text" value={cpf} onChange={(evento) => setCpf(evento.target.value)} placeholder="***.***.***-**" required />
          </div>
          
           <div>
            <label>Digite sua data de nascimento</label>
            <InputMask
              mask="99/99/9999"
              className="input-cadastroPessoa"
              type="text"
              value={data}
              onChange={(evento) => setData(evento.target.value)}
              placeholder="DD/MM/AAAA"
              required
            />
          </div>

          <div>
          <label>Digite seu telefone</label>
              <InputMask  mask="(99) 99999-9999" className="input-cadastroPessoa" type="text" value={telefone} onChange={(evento) => setTelefone(evento.target.value)} placeholder="(**) *****-****" required />
          </div>

          <div>
            <label>Digite sua rua</label>
            <input
              className="input-cadastroPessoa"
              type="text"
              value={rua}
              onChange={(evento) => setRua(evento.target.value)}
              placeholder="Rua Exemplo da Silva"
              aria-label="Rua"
              required
            />
          </div>

          <div className="inputs-row">
            <div className="half-width">
              <label>Digite o número</label>
              <input
                className="input-cadastroPessoa"
                type="number"
                value={numero}
                onChange={(evento) => setNumero(evento.target.value)}
                placeholder="Número"
                aria-label="Número"
                required
              />
            </div>

            <div className="half-width">
              <label>Digite o bairro</label>
              <input
                className="input-cadastroPessoa"
                type="text"
                value={bairro}
                onChange={(evento) => setBairro(evento.target.value)}
                placeholder="Bairro"
                aria-label="Bairro"
                required
              />
            </div>
          </div>

          <div>
            <label>Digite a cidade</label>
            <input
              className="input-cadastroPessoa"
              type="text"
              value={cidade}
              onChange={(evento) => setCidade(evento.target.value)}
              placeholder="Cidade"
              aria-label="Cidade"
              required
            />
          </div>

          <div>
            <label>Digite seu CEP</label>
            <InputMask
              className="input-cadastroPessoa"
              type="text"
              value={cep}
              mask="99999-999"
              onChange={(evento) => setCep(evento.target.value)}
              placeholder="__.___.___"
              aria-label="CEP"
              required
            />
          </div>
          
          <div>
            <label>Digite seu email</label>
            <input
              className="input-cadastroPessoa"
              type="email"
              value={email}
              onChange={(evento) => setEmail(evento.target.value)}
              placeholder="exemplo@gmail.com"
              aria-label="E-mail"
              required
            />
          </div>

          <div>
            <input
              className="input-cadastroPessoa"
              type="password"
              value={senha}
              onChange={(evento) => setSenha(evento.target.value)}
              placeholder="Senha"
              aria-label="Senha"
              required
            />
            <label>
              A senha deve conter no mínimo 6 dígitos, uma letra maiúscula, uma
              minúscula e um caractere especial.
            </label>
          </div>

          
          <div>
            <label>Confirme sua senha</label>
            <input
              className="input-cadastroPessoa"
              type="password"
              value={confirmacaoSenha}
              onChange={(evento) =>
                setConfirmacaoSenha(evento.target.value)
              }
              placeholder="Confirmação de senha"
              aria-label="Confirmação de senha"
              required
            />
          </div>
          
      <Link to="/login" className="link-login">Já possui cadastro? Faça Login</Link>
          {error && <div className="error-message">{error}</div>}
          {successo && <div className="successo-message">Cadastro realizado com sucesso!</div>}
          <button className="submit" type="submit"  style={{ backgroundColor: "#407BFF", borderRadius: 15 }}>Cadastrar</button>
        </form>
      </div>
    </div>
  );
}

export default Cadastro;
