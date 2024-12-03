import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

// Import CSS
import '../styles/inicio.css';
import '../styles/como-funciona.css';
import '../styles/recursos.css';
import '../styles/contato.css';

// Import Assets
import imageElipse from '../assets/Ellipse.png';
import imageBebe from '../assets/Child.png';
import imageAbout from '../assets/imageAbout.png';
import cabecalho from '../assets/cabecalho.png';
import Avatar from '../assets/Avatar.png'


function Navbar() {
  const smoothScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  console.log(localStorage.getItem("token"))
  const navigate = useNavigate();
  const handleLogout = async () => {
    const token = localStorage.getItem("token");
    try {
      await axios.delete('http://localhost:8080/auth/logout', {
        headers: {
          Authorization: `Bearer ${token}`, // Passando o token como header
        },
        withCredentials: true,
      });
  
      // Limpar o token localStorage ou cookie
      localStorage.removeItem('token');
      localStorage.removeItem("clinicaId");
  
      // Redirecionar para a página de login ou outra página
      navigate('/login')
    } catch (error) {
      console.log(error)
      console.error('Erro ao fazer logout', error);
    }
  };  
  console.log(localStorage.getItem("token"), localStorage.getItem("clinicaId"))
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <div style={{    listStyle: 'none',
    padding: 0,
    display: 'flex',
    justifyContent: 'space-between'}}>

        {[
          { id: 'inicio', label: 'Início' },
          { id: 'about', label: 'Como Funciona' },
          { id: 'recursos', label: 'Recursos' },
        ].map(({ id, label }) => (
          <li key={id}>
            <a 
              href={`#${id}`} 
              style={styles.navItem} 
              onClick={(e) => smoothScroll(e, id)}
            >
              {label}
            </a>
          </li>          
        ))}

          {
            localStorage.getItem("token")  && localStorage.getItem("clinicaId") == "undefined" || localStorage.getItem("clinicaId") == ""? 
          <li>
          <Link to="/pesquisa" type="button" className="button-30"   style={{ paddingTop: 5,paddingBottom:5 }}>
              PROCURAR ClÍNICAS
          </Link>
          </li>:null
          }
        </div>

        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            
          }}>

          {
            localStorage.getItem("token") && localStorage.getItem("clinicaId") && localStorage.getItem("clinicaId") !== "undefined" && localStorage.getItem("clinicaId") !== "" ?
            <li style={{ marginRight: 20 }}>
              <Link to="/telaPerfilClinica">
                <img src={Avatar} alt="Child" style={{width: 50, height: 50}} />
              </Link>
            </li> : null
          }
           {
            localStorage.getItem("token") ?
            <li>
      <button  
        onClick={handleLogout}
        className="sair-button button-34-red" 
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '8px 16px',
          backgroundColor: '#ff4d4f',
          color: '#fff',
          border: 'none',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease',
        }}
  
      >
        <span>Sair</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          style={{ marginRight: 8 }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12h6m0 0-3 3m3-3-3-3m5 3H5m2 6h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z"
          />
        </svg>
      </button>
    </li>
          :null}
</div>
      </ul>
    </nav>
  );
}

function Inicio() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderHeroSection = () => (
    <section className="inicio" id="inicio">
      <div className='desc'>
        <h1 id="titulo">Sua Plataforma de Apoio e Conexão para Famílias e Especialistas</h1>
        <p id="sub-titulo">
          Aqui, você é capaz de encontrar o apoio que <br />
          precisa para cuidar de quem você ama.
        </p>
        {
          localStorage.getItem('token') ?
          null:

        <div className="botoes">
          <Link to="/cadastroPessoa" type="button" className="button1">
            Sou um paciente
          </Link>
          <Link to="/cadastroPJ" type="button" className="button2" size="lg" variant="outline">
            Sou uma clínica
          </Link>
          
        </div>
        } 
      </div>
      <div className="image-container">
        <img src={imageElipse} alt="Elipse" className="background-image" />
        <img src={imageBebe} alt="Child" className="overlay-image" />
      </div>
    </section>
  );

  const renderAboutSection = () => (
    <section className='about' id='about'>
      <div className='sectionAbout'>
        <h2 id='title'>Como Funciona?</h2>
        <p id='subtitle'>
          O Connect Azul conecta famílias com profissionais<br />
          especializados em autismo, oferecendo perfis detalhados e<br />
          uma busca avançada. Facilita a comunicação e promove<br />
          uma comunidade de suporte para melhorar a qualidade de vida.
        </p>
        {/* <div>
          <Link to="/cadastroPessoa" type="button" className="button3">
            Crie já seu cadastro
          </Link>
        </div> */}
      </div>
      <div className='imageAbout'>
        <img src={imageAbout} alt="image" className="aboutImage" />
      </div>
    </section>
  );

  const renderResourcesSection = () => (
    <section className='recursos' id='recursos'>
      <div className='cabecalho'>
        <img src={cabecalho} alt="cabeçalho" className="cabecalhoImage" />
      </div>
      <div className="resources-section">
        <h2>Recursos</h2>
        <div className="resources-container">
          {[
            {
              title: 'Fonoaudiologia no Autismo:',
              links: [
                { text: 'A Importância da Fonoaudiologia no Autismo - Autismo em Foco', href: '#link1' },
                { text: 'Fonoaudiologia para crianças com autismo – Ipa Therapy', href: '#link2' }
              ]
            },
            {
              title: 'Terapia Ocupacional:',
              links: [
                { text: 'Terapia Ocupacional e Autismo - Viva e Deixe Viver', href: '#link3' }
              ]
            },
            {
              title: 'Musicoterapia no Autismo:',
              links: [
                { text: 'Musicoterapia no Tratamento do Autismo', href: '#link4' },
                { text: 'A influência da Musicoterapia em crianças com autismo – UCLSC', href: '#link5' }
              ]
            }
          ].map((resource, index) => (
            <div key={index} className="resource-column">
              <h3>{resource.title}</h3>
              <ul>
                {resource.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={link.href}>{link.text}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <>
      <Navbar />
      {renderHeroSection()}
      {renderAboutSection()}
      {renderResourcesSection()}

      {isVisible && (
        <button
          className="back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          ↑
        </button>
      )}
    </>
  );
}

const styles = {
  navbar: {
    padding: '1em',
    textAlign: 'left',
    top: 0,
    width: '100%',
    zIndex: 1000,
  },
  navList: {
    listStyle: 'none',
    padding: 0,
    display: 'flex',
    justifyContent: 'space-between',
  },
  navItem: {
    color: '#fff',
    margin: '0 15px',
    textDecoration: 'none',
  },
};

export default Inicio;