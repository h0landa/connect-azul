import React, { useState } from 'react';
import {Link} from 'react-router-dom';

import "./styles/inicio.css";
import "./styles/login.css"
import imageElipse from './assets/Ellipse.png';


function Login () {
    const [email, setEmail] = useState ('');
    const [password, setPassword] = useState ('');
    const [error, setError] = useState ('');
        const handleSubmit = (evento) => {
            evento.preventDefault();
                //colocar aqui a requisição de uma API de autenticação que será feita pelo backend
                  if (email === '' || password ==='') {
                      setError ('E-mail ou senha inválidos.')
                        } else { 
                            //colocar aqui o redirecionamento da rota para onde o usuario vai quando for autenticado
                            
            }

        }

    return (
        <div className = 'tela-login'>
        
            <form onSubmit={handleSubmit}>
                <div className='white-box'>
                <h1 className='bem-vindo'>Bem-Vindo</h1>
                <label>
                <input type="email" value={email} onChange={(evento) => setEmail(evento.target.value)} required/>
                Digite seu e-mail.
                </label>

                <br />

                <label>
                <input type="password" value={password} onChange={(evento) => setPassword (evento.target.value)} required/>
                Digite sua senha.
                </label>

                <br />

                {error && <p style={{color: 'red'}}>{error}</p>}       </div> 

                <Link to="/cadastroPessoa">Nâo é usuário? Cadastre-se</Link>
                
                <button type="submit">Avançar</button>
                

            </form>
        </div>
);


}

            
export default Login;