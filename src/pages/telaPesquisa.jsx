import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Importando o Link
import '../styles/telaPesquisa.css';

function Pesquisa() {
  const [clinicas, setClinicas] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');

  // Função para buscar as clínicas
  const fetchClinicas = async (searchTerm) => {
    setLoading(true);
    setError(null);

    try {
        console.log(searchTerm);

        const token = localStorage.getItem('token');
        
        // Configuração condicional de parâmetros
        const params = searchTerm ? { query: searchTerm } : {};

        const response = await axios.get('http://localhost:8080/api/clinicas/', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            params, // Usa os parâmetros condicionais
            withCredentials: true,
        });

        // Verifique se a resposta é um array antes de setar o estado
        const clinicasData = Array.isArray(response.data) ? response.data : [];
        setClinicas(clinicasData); // Armazena as clínicas retornadas pela API
    } catch (error) {
        setError('Erro ao buscar clínicas'); // Em caso de erro
    } finally {
        setLoading(false); // Define o estado de loading como falso
    }
  };

  // Chamada de API quando o componente é montado ou quando o query mudar
  useEffect(() => {
    if (query) {
      fetchClinicas(query); // Busca as clínicas apenas se houver um termo de pesquisa
    } else {
      setClinicas([]); // Limpa as clínicas se a pesquisa estiver vazia
    }
  }, [query]); // Recarrega quando o termo de pesquisa mudar

  // Função para lidar com o botão de pesquisa
  const handleSearch = () => {
    fetchClinicas(query); // Reexecuta a busca quando o botão de pesquisa for clicado
  };

  // Função para limpar o campo de pesquisa
  const clearSearch = () => {
    setQuery(''); // Limpa o campo de pesquisa
    setClinicas([]); // Limpa os resultados de clínicas
  };

  return (
    <div>
      {/* Botão Voltar */}
      <Link to="/" className="voltar-button button-34">
        &laquo; Voltar {/* Ícone de seta para voltar */}
      </Link>

      <input
        className='input-barra-pesquisa'
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)} // Atualiza o estado da query
        placeholder="Pesquise"
      />

      {/* Exibição de erro */}
      {error && <div>{error}</div>}

      {/* Exibição de resultados */}
      {query && (  // Só exibe os resultados quando a pesquisa foi feita
        <div className="resultado-cards">
          {clinicas.length > 0 ? (
            clinicas.map((clinica, index) => (
              <div className="card-clinica" key={index}>
                <h3>{clinica.nome}</h3>
                <p>{clinica.endereco}</p>
                <p>{clinica.telefone}</p>
              </div>
            ))
          ) : (
            !loading && <p>Nenhuma clínica encontrada.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Pesquisa;
