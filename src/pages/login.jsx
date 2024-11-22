import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

import "../styles/login.css";
import imageSlogan from "../assets/Slogan.png";
import imageElipse from '../assets/Ellipse.png';

function Login () {
    const [email, setEmail] = useState ('');
    const [password, setPassword] = useState ('');
    const [error, setError] = useState ('');

    const emailValido =(email) => /\S+@\S+\.\S+/.test(email);
    const senhaValida = (password) => password.length >= 10;


        const handleSubmit = (evento) => {
            evento.preventDefault();
                //colocar aqui a requisição de uma API de autenticação que será feita pelo backend
                  if (email === '' || password ==='') {
                      setError ('E-mail ou senha inválidos.')
                        } else { 
                            //colocar aqui o redirecionamento da rota para onde o usuario vai quando for autenticado
                            
            }

            try {
                const requisicao = await axios.get ('../services/db_clinicas.json',{params: { email, password}} ,'../services/db_pessoa.json' ,{params: { email, password}});
                const user = requisicao.data.find((user) => user.email === email && user.password === password);
                
            }



        }

    return (
        <div className = 'tela-login'>

            <div className='slogan'>
            <Link to="/"><img src={imageSlogan} alt="Slogan" className="Slogan" /></Link>
            </div>


            <form onSubmit={handleSubmit}>
                <div className='white-box'>
                <h1 className='bem-vindo'>Bem-Vindo</h1>
                <label className='label-login'>
                <input className="input-login" placeholder='Digite seu e-mail' type="email" value={email} onChange={(evento) => setEmail(evento.target.value)} required/><br/>
                </label>
                <br />
                <label className='label-login'>
                <input className="input-login" placeholder="Digite sua senha" type="password" value={password} onChange={(evento) => setPassword (evento.target.value)} required/><br/>
                </label>

                <br />

                {error && <p style={{color: 'red'}}>{error}</p>}       </div> 

                <Link to="/cadastroPessoa" className='cadastro'>Não é usuário? Cadastre-se</Link>
                <br/>
                <button className="submit" type="submit">Avançar</button>
                

            </form>

        

        </div>
);


}

            
export default Login;