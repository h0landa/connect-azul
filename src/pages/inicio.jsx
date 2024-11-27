import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Import CSS
import '../styles/inicio.css';
import '../styles/como-funciona.css';
import '../styles/recursos.css';
import '../styles/contato.css';

// Import Assets
import imageElipse from '../assets/Ellipse.png';
import imageBebe from '../assets/Child.png';
import imageSlogan from '../assets/Slogan.png';
import imageAbout from '../assets/imageAbout.png';
import cabecalho from '../assets/cabecalho.png';

// Social Media Icons
import Whatsapp from '../assets/whatsapp.png';
import Telefone from '../assets/telefone.png';
import Youtube from '../assets/youtube.png';
import Instagram from '../assets/instagram.png';

function Navbar() {
  const smoothScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        {[
          { id: 'inicio', label: 'Início' },
          { id: 'about', label: 'Como Funciona' },
          { id: 'recursos', label: 'Recursos' },
          { id: 'contato', label: 'Contato' }
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
        <li>
        <Link to="/pesquisa" type="button" className="button-30" size="lg" variant="outline">
            ACHAR ClÍNICAS
        </Link>
          
        </li>
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
        <div className="botoes">
          <Link to="/cadastroPessoa" type="button" className="button1">
            Sou um paciente
          </Link>
          <Link to="/cadastroPJ" type="button" className="button2" size="lg" variant="outline">
            Sou uma clínica
          </Link>
          
        </div>
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
        <div>
          <Link to="/cadastroPessoa" type="button" className="button3">
            Crie já seu cadastro
          </Link>
        </div>
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

  const renderContactSection = () => (
    <section className="contato" id="contato">
      <div className="bola fundo-bola-1"></div>
      <div className="bola fundo-bola-2"></div>
      <div className="bola fundo-bola-3"></div>

      <div className="formulario">
        <h2></h2>
        <form>
          <input
            type="email"
            placeholder="Digite seu email"
            className="input-email"
          />
          <textarea
            placeholder="Digite sua mensagem"
            className="input-mensagem"
          ></textarea>
          <button type="submit" className="botao-enviar">
            Enviar
          </button>
        </form>
      </div>

      <div className="informacoes-contato">
        <h2>Contato</h2>
        <div className="icones-contato">
          <img src={Whatsapp} alt="whatsapp" className="Whatsapp" />
          <img src={Telefone} alt="telefone" className="Telefone" />
          <img src={Youtube} alt="youtube" className="Youtube" />
          <img src={Instagram} alt="instagram" className="Instagram" />
        </div>
      </div>
    </section>
  );

  return (
    <>
      <Navbar />

      <div className='slogan'>
        <Link to="/"><img src={imageSlogan} alt="Slogan" className="Slogan" /></Link>
      </div>

      {renderHeroSection()}
      {renderAboutSection()}
      {renderResourcesSection()}
      {renderContactSection()}

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
    justifyContent: 'flex-start',
  },
  navItem: {
    color: '#fff',
    margin: '0 15px',
    textDecoration: 'none',
  },
};

export default Inicio;