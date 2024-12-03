import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles/telaPesquisa.css';

function Pesquisa() {
  const [clinicas, setClinicas] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');

  const formatPhoneNumber = (phoneNumber) => {
    if (!phoneNumber) return ''; // Retorna uma string vazia se o número não estiver disponível
    
    // Garantir que phoneNumber seja uma string
    const phoneString = String(phoneNumber);
    
    // Remove qualquer caractere que não seja número
    const cleaned = phoneString.replace(/\D/g, '');
    
    // Aplica a formatação (xx) xxxx-xxxx
    const match = cleaned.match(/^(\d{2})(\d{4})(\d{4})$/);
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return phoneString; // Retorna o número sem formatação se não seguir o padrão
  };

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

  const DetailItem = ({ iconClass, text }) => {
    return (
      <div style={{ display: "flex", alignItems: "center", marginBottom: "5px" }}>
        <i className={iconClass} style={{ marginRight: "10px" }}></i>
        {text}
      </div>
    );
  };

  return (
    <div>
      {/* Botão Voltar */}
      <Link to="/" className="voltar-button button-34">
        &laquo; Voltar
      </Link>

      <div className="input-container">
        <input
          className='input-barra-pesquisa'
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)} // Atualiza o estado da query
          placeholder="Pesquise"
        />
        <svg width="70" height="50" style={{ marginRight: 10 }} viewBox="0 0 70 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="70" height="50" rx="20" fill="#407BFF"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M38.197 28.2728C40.7096 25.7602 40.7096 21.6864 38.197 19.1738C35.6844 16.6612 31.6106 16.6612 29.098 19.1738C26.5854 21.6864 26.5854 25.7602 29.098 28.2728C31.6106 30.7854 35.6844 30.7854 38.197 28.2728ZM39.5618 32.6707C35.3983 35.4291 29.7333 34.9742 26.065 31.3058C21.8773 27.1181 21.8773 20.3285 26.065 16.1408C30.2527 11.9531 37.0423 11.9531 41.23 16.1408C44.8984 19.8091 45.3533 25.4741 42.5948 29.6376L47.296 34.3388C48.1336 35.1764 48.1336 36.5343 47.296 37.3718C46.4585 38.2094 45.1006 38.2094 44.263 37.3718L39.5618 32.6707Z" fill="white"/>
        </svg>
      </div>

      {/* Exibição de erro */}
      {error && <div>{error}</div>}

      {/* Exibição de resultados */}
      {clinicas.length > 0 && (  // Só exibe os resultados quando houver clínicas
        <div style={{ backgroundColor: '#D9D9D942', borderRadius: 16, padding: 16, marginTop: 10, paddingTop: 10, paddingBottom: 10 }}>
          {clinicas.map((clinica, index) => (
            <div key={index} className="card" style={{ marginTop: 15 }}>
              <div className="content">
                <div className="title">
                  {clinica.nome}
                </div>
                <div className="details" style={{ marginTop: "10px" }}>
                  <div>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_985_1804)">
                        <path d="M10 10C10.9167 10 11.6667 9.25002 11.6667 8.33335C11.6667 7.41669 10.9167 6.66669 10 6.66669C9.08337 6.66669 8.33337 7.41669 8.33337 8.33335C8.33337 9.25002 9.08337 10 10 10ZM10 1.66669C13.5 1.66669 16.6667 4.35002 16.6667 8.50002C16.6667 11.15 14.625 14.2667 10.55 17.8584C10.2334 18.1334 9.75837 18.1334 9.44171 17.8584C5.37504 14.2667 3.33337 11.15 3.33337 8.50002C3.33337 4.35002 6.50004 1.66669 10 1.66669Z" fill="black"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_985_1804">
                          <rect width="20" height="20" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>

                    <DetailItem 
                      iconClass="fas fa-map-marker-alt" 
                      text={clinica.enderecos && clinica.enderecos.length > 0 ? 
                        clinica.enderecos.map((endereco, index) => (
                          `${endereco.rua}, ${endereco.numero}, ${endereco.cep}`
                        )).join(", ") 
                        : "Endereço não disponível"
                      }
                    />
                  </div>
                  <div>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_985_1800)">
                    <path d="M16.025 12.7167L13.9084 12.475C13.4 12.4167 12.9 12.5917 12.5417 12.95L11.0084 14.4834C8.65003 13.2834 6.7167 11.3584 5.5167 8.9917L7.05837 7.45003C7.4167 7.09169 7.5917 6.5917 7.53337 6.08336L7.2917 3.98336C7.1917 3.1417 6.48337 2.50836 5.63337 2.50836H4.1917C3.25003 2.50836 2.4667 3.2917 2.52503 4.23336C2.9667 11.35 8.65837 17.0334 15.7667 17.475C16.7084 17.5334 17.4917 16.75 17.4917 15.8084V14.3667C17.5 13.525 16.8667 12.8167 16.025 12.7167Z" fill="black"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_985_1800">
                    <rect width="20" height="20" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
                      <DetailItem iconClass="fas fa-phone-alt" text={formatPhoneNumber(clinica.contatos && clinica.contatos[0] ? clinica.contatos[0].telefone : '')} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {clinicas.length === 0 && !loading && (
        <div>Não há clínicas para mostrar.</div>
      )}
    </div>
  );
}

export default Pesquisa;
