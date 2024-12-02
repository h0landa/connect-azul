import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/cadastroPJ.css";
import imageSlogan from "../assets/Slogan.png";

function CadastroPJ() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [cep, setCep] = useState("");
  const [telefone, setTelefone] = useState("");
  const [site, setSite] = useState("");
  const [redeSocial, setRedeSocial] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmacaoSenha, setConfirmacaoSenha] = useState("");
  const [mensagemErro, setMensagemErro] = useState("");
  const [roles] = useState("USER");

  const handleSubmit = async (evento) => {
    evento.preventDefault();

    if (senha !== confirmacaoSenha) {
      setMensagemErro("Senhas não coincidem!");
      return;
    }

    const contatos = [
      {
        telefone: parseInt(telefone, 10),
        site,
        redeSocial,
      },
    ];

    const enderecos = [
      {
        rua,
        numero: parseInt(numero, 10),
        bairro,
        cidade,
        cep,
      },
    ];

    const usuario = {
      nome,
      email,
      senha,
      roles,
    };

    const empresa = {nome, cnpj, contatos, enderecos, usuario};

    console.log(empresa);

    try {
      await axios.post("http://localhost:8080/api/clinicas/novo", empresa);
      
      setMensagemErro(""); // Limpa a mensagem de erro ao enviar com sucesso
    } catch (erro) {
      console.error("Erro ao enviar os dados:", erro);
      setMensagemErro("Erro ao cadastrar. Tente novamente mais tarde.");

      setTimeout(() => {
        navigate('/login');
           }, 3000);
    }
  };

  return (
    <div className="tela-cadastroPessoa">
      <div className="slogan">
        <Link to="/">
          <img src={imageSlogan} alt="Slogan" className="Slogan" />
        </Link>
      </div>

      <div className="white-box-cadastro">
        <form onSubmit={handleSubmit} className="form-container">
          <div>
            <label>Digite o nome da Clínica ou Hospital</label>
            <input
              className="input-cadastroPessoa"
              type="text"
              value={nome}
              onChange={(evento) => setNome(evento.target.value)}
              placeholder="Nome da Clínica ou Hospital"
              aria-label="Nome da Clínica ou Hospital"
              required
            />
          </div>

          <div>
            <label>Digite seu CNPJ</label>
            <input
              className="input-cadastroPessoa"
              type="text"
              value={cnpj}
              onChange={(evento) => setCnpj(evento.target.value)}
              placeholder="__.___.___/____-__"
              aria-label="CNPJ"
              required
            />
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
            <input
              className="input-cadastroPessoa"
              type="text"
              value={cep}
              onChange={(evento) => setCep(evento.target.value)}
              placeholder="__.___.___"
              aria-label="CEP"
              required
            />
          </div>

          <div>
            <label>Digite seu telefone</label>
            <input
              className="input-cadastroPessoa"
              type="text"
              value={telefone}
              onChange={(evento) => setTelefone(evento.target.value)}
              placeholder="__.___.___"
              aria-label="Telefone"
              required
            />
          </div>

          <div>
            <label>Digite seu site</label>
            <input
              className="input-cadastroPessoa"
              type="url"
              value={site}
              onChange={(evento) => setSite(evento.target.value)}
              placeholder="http://www.exemplo.com"
              aria-label="Site"
              required
            />
          </div>
          <div>
            <label>Digite sua rede social</label>
            <input
              className="input-cadastroPessoa"
              type="url"
              value={redeSocial}
              onChange={(evento) => setRedeSocial(evento.target.value)}
              placeholder="@exemplo"
              aria-label="Rede social"
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

        </form>
      </div>
        {mensagemErro && <p className="error-message">{mensagemErro}</p>}
        <Link to="/login" className="link-login">
          Já possui cadastro? Faça Login
        </Link>
          <button
            className="submit"
            type="submit"
            style={{ backgroundColor: "#407BFF", borderRadius: 15 }}
          >
            Cadastrar
          </button>
    </div>
  );
}

export default CadastroPJ;
