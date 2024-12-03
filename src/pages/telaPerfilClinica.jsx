import React, { useState, useEffect } from "react";
import "../styles/telaPerfilClinica.css";
import axios from "axios";

const TelaPerfilClinica = () => {
  // Estado para armazenar os dados da clínica e lista de profissionais
  const [clinica, setClinica] = useState(null);
  const [profissionais, setProfissionais] = useState([]);
  const [novoProfissional, setNovoProfissional] = useState({ nome: "", especialidade: "" });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log(localStorage.getItem("clinicaId"), localStorage.getItem("token"))
  useEffect(() => {
    const fetchClinica = async () => {
      try {
        // Obtenha o clinicaId do localStorage
        const clinicaId = localStorage.getItem("clinicaId");
        if (!clinicaId) throw new Error("Clinica ID não encontrado no localStorage");

        // Faça a chamada à API usando o ID da clínica
        const token = localStorage.getItem("token");

        const response = await axios.get(`http://localhost:8080/api/clinicas/${clinicaId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        });

        // Os dados da resposta já estão disponíveis em response.data
        const data = response.data;

        // Atualize o estado com os dados da clínica e profissionais
        setClinica(data);
        setProfissionais(data.profissionais || []); // Supondo que os profissionais venham da resposta da API
        setLoading(false); // Defina o estado de carregamento como falso quando os dados estiverem prontos
      } catch (error) {
        console.error("Erro ao buscar dados da clínica:", error);
        setError("Erro ao carregar os dados da clínica.");
        setLoading(false);
      }
    };

    fetchClinica();
  }, []);

  const handleAdicionarProfissional = () => {
    if (novoProfissional.nome && novoProfissional.especialidade) {
      setProfissionais((prev) => [
        ...prev,
        { id: prev.length + 1, ...novoProfissional },
      ]);
      setNovoProfissional({ nome: "", especialidade: "" }); // Limpar os campos após adicionar
    }
  };

  if (loading) {
    return <div>Carregando dados da clínica...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="tela-perfil">
      <h1>Perfil da Clínica</h1>
      <div className="clinica-info">
        <p><strong>Nome:</strong> {clinica.nome}</p>
        <p><strong>CNPJ:</strong> {clinica.cnpj}</p>
        <h3>Contatos</h3>
        {clinica.contatos && clinica.contatos.map((contato) => (
          <div key={contato.id} className="contato-item">
            <p><strong>Telefone:</strong> {contato.telefone}</p>
            <p>
              <strong>Site:</strong>{" "}
              <a href={contato.site} target="_blank" rel="noopener noreferrer">
                {contato.site}
              </a>
            </p>
            <p>
              <strong>Rede Social:</strong>{" "}
              <a href={contato.redeSocial} target="_blank" rel="noopener noreferrer">
                {contato.redeSocial}
              </a>
            </p>
          </div>
        ))}
        <h3>Endereços</h3>
        {clinica.enderecos && clinica.enderecos.map((endereco) => (
          <div key={endereco.id} className="endereco-item">
            <p>
              <strong>Rua:</strong> {endereco.rua}, {endereco.numero}
            </p>
            <p>
              <strong>Bairro:</strong> {endereco.bairro} - {endereco.cidade}/{endereco.estado}
            </p>
            <p><strong>CEP:</strong> {endereco.cep}</p>
            {endereco.complemento && (
              <p><strong>Complemento:</strong> {endereco.complemento}</p>
            )}
          </div>
        ))}
      </div>

      <h2>Profissionais</h2>
      <ul className="profissionais-list">
        {profissionais.map((profissional) => (
          <li key={profissional.id} className="profissional-item">
            {profissional.nome} - {profissional.especialidade}
          </li>
        ))}
      </ul>

      <h3>Adicionar Profissional</h3>
      <div className="adicionar-profissional">
        <input
          type="text"
          placeholder="Nome"
          value={novoProfissional.nome}
          onChange={(e) =>
            setNovoProfissional({ ...novoProfissional, nome: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Especialidade"
          value={novoProfissional.especialidade}
          onChange={(e) =>
            setNovoProfissional({
              ...novoProfissional,
              especialidade: e.target.value,
            })
          }
        />
        <button onClick={handleAdicionarProfissional}>Adicionar</button>
      </div>
    </div>
  );
};

export default TelaPerfilClinica;
