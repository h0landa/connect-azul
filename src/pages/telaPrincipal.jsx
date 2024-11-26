import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

import '../styles/telaPrincipal.css'

function TelaPrincipal() {
  const navigate = useNavigate();
  const [error, setError] = useState (null);


      useEffect (() => {
        const token = localStorage.getItem("authToken");

          if (!token) {
            setError('Faça login para acessar a página.');
            navigate ("/");
          }
      }, [navigate]);

          if (error) {
            return <div>{error}</div>;
          }


  return (
    <>
    
    
    </>
  );
}

export default TelaPrincipal;
