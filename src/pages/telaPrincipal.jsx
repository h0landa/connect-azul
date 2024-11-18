import React, { useState, useEffect } from 'react';
import '../styles/telaPrincipal.css'
import api from 'services/api';

function TelaPrincipal() {
  const [clinicas, setClinicas] = useState([]);
  const [busca, setBusca] = useState('');

 
  const clinicasFiltradas = clinicas.filter(clinica =>
    clinica.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="app-container">
      <header>
        <h1>Connect Azul</h1>
        <input type="text" 
          placeholder="Nome da clinica"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
      </header>
      
      <div className="clinicas-list">
        {clinicasFiltradas.map((clinica, index) => (
          <div key={index} className="clinica-card">
            <h3>{clinica.nome}</h3>
            <p><strong>Especialidade:</strong> {clinica.especialidade}</p>
            <p><strong>Endereço:</strong> {clinica.endereco}</p>
            <p><strong>Telefone:</strong> {clinica.telefone}</p>
            <button>Faixa Etária</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TelaPrincipal;
