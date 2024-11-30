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
        &laquo; Voltar {/* Ícone de seta para voltar */}
      </Link>
      <div className="input-container">
        <input
          className='input-barra-pesquisa'
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)} // Atualiza o estado da query
          placeholder="Pesquise"
        />
          <svg width="70" height="50" viewBox="0 0 70 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="70" height="50" rx="20" fill="#407BFF"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M38.197 28.2728C40.7096 25.7602 40.7096 21.6864 38.197 19.1738C35.6844 16.6612 31.6106 16.6612 29.098 19.1738C26.5854 21.6864 26.5854 25.7602 29.098 28.2728C31.6106 30.7854 35.6844 30.7854 38.197 28.2728ZM39.5618 32.6707C35.3983 35.4291 29.7333 34.9742 26.065 31.3058C21.8773 27.1181 21.8773 20.3285 26.065 16.1408C30.2527 11.9531 37.0423 11.9531 41.23 16.1408C44.8984 19.8091 45.3533 25.4741 42.5948 29.6376L47.296 34.3388C48.1336 35.1764 48.1336 36.5343 47.296 37.3718C46.4585 38.2094 45.1006 38.2094 44.263 37.3718L39.5618 32.6707Z" fill="white"/>
          </svg>
      </div>

      <div className="card" style={{marginTop:15}}>
      <div className="content">
        <div className="title">
          Clínica do Shopping

        </div>
        <div className="details" style={{ marginTop: "10px" }}>
          <div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_989_1844)">
            <path d="M19 2H14.82C14.4 0.84 13.3 0 12 0C10.7 0 9.6 0.84 9.18 2H5C3.9 2 3 2.9 3 4V20C3 21.1 3.9 22 5 22H19C20.1 22 21 21.1 21 20V4C21 2.9 20.1 2 19 2ZM12 2C12.55 2 13 2.45 13 3C13 3.55 12.55 4 12 4C11.45 4 11 3.55 11 3C11 2.45 11.45 2 12 2ZM18 20H6C5.45 20 5 19.55 5 19V5C5 4.45 5.45 4 6 4H7V5C7 6.1 7.9 7 9 7H15C16.1 7 17 6.1 17 5V4H18C18.55 4 19 4.45 19 5V19C19 19.55 18.55 20 18 20Z" fill="black"/>
            </g>
            <defs>
            <clipPath id="clip0_989_1844">
            <rect width="24" height="24" fill="white"/>
            </clipPath>
            </defs>
            </svg>
            <DetailItem iconClass="fas fa-calendar-alt" text="Nutrólogo para Emagrecimento" />
          </div>

          <div>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_989_1829)">
          <path d="M9.99996 5.83333V4.16667C9.99996 3.25 9.24996 2.5 8.33329 2.5H3.33329C2.41663 2.5 1.66663 3.25 1.66663 4.16667V15.8333C1.66663 16.75 2.41663 17.5 3.33329 17.5H16.6666C17.5833 17.5 18.3333 16.75 18.3333 15.8333V7.5C18.3333 6.58333 17.5833 5.83333 16.6666 5.83333H9.99996ZM4.99996 15.8333H3.33329V14.1667H4.99996V15.8333ZM4.99996 12.5H3.33329V10.8333H4.99996V12.5ZM4.99996 9.16667H3.33329V7.5H4.99996V9.16667ZM4.99996 5.83333H3.33329V4.16667H4.99996V5.83333ZM8.33329 15.8333H6.66663V14.1667H8.33329V15.8333ZM8.33329 12.5H6.66663V10.8333H8.33329V12.5ZM8.33329 9.16667H6.66663V7.5H8.33329V9.16667ZM8.33329 5.83333H6.66663V4.16667H8.33329V5.83333ZM15.8333 15.8333H9.99996V14.1667H11.6666V12.5H9.99996V10.8333H11.6666V9.16667H9.99996V7.5H15.8333C16.2916 7.5 16.6666 7.875 16.6666 8.33333V15C16.6666 15.4583 16.2916 15.8333 15.8333 15.8333ZM15 9.16667H13.3333V10.8333H15V9.16667ZM15 12.5H13.3333V14.1667H15V12.5Z" fill="black"/>
          </g>
          <defs>
          <clipPath id="clip0_989_1829">
          <rect width="20" height="20" fill="white"/>
          </clipPath>
          </defs>
          </svg>
            <DetailItem iconClass="fas fa-id-card" text="33.014.556/1598-96" />
          </div>

          <DetailItem iconClass="fas fa-map-marker-alt" text="Av. Nevaldo Rocha, 3775, 59570-000" />
          <DetailItem iconClass="fas fa-phone-alt" text="(84) 2030-9999" />
        </div>
      </div>
      <div className="badge">FAIXA ETÁRIA</div>
    </div>

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
