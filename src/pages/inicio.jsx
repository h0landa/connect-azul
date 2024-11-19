import '../styles/inicio.css';
import '../styles/como-funciona.css';
import '../styles/recursos.css';


import { Button } from '@/components/ui/button';


import imageElipse from '../assets/Ellipse.png';
import imageBebe from '../assets/Child.png';
import imageSlogan from '../assets/Slogan.png';
import imageAbout from '../assets/imageAbout.png';
import pecaAbout from "../assets/peca.png";
import cabecalho from '../assets/cabecalho.png';
import { Link } from 'react-router-dom';


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
       <li>
         <a href="#inicio" style={styles.navItem} onClick={(e) => smoothScroll(e, 'inicio')}>
           Início
         </a>
       </li>
       <li>
         <a href="#about" style={styles.navItem} onClick={(e) => smoothScroll(e, 'about')}>
           Como Funciona
         </a>
       </li>
       <li>
         <a href="#recursos" style={styles.navItem} onClick={(e) => smoothScroll(e, 'recursos')}>
           Recursos
         </a>
       </li>
       <li>
         <a href="#contato" style={styles.navItem} onClick={(e) => smoothScroll(e, 'contato')}>
           Contato
         </a>
       </li>
     </ul>
   </nav>
 );
}


function Inicio() {
 return (
   <>
     {/* Barra de navegação */}
     <Navbar />
     <div className='slogan'>
     <Link to="/"><img src={imageSlogan} alt="Slogan" className="Slogan" /></Link>
     </div>


     {/* Sessão: início */}
     <section className="inicio" id="inicio">
       <div className='desc'>
         <h1 id="titulo">Sua Plataforma de Apoio e Conexão para Famílias e Especialistas</h1>
         <p id="sub-titulo">
           Aqui, você é capaz de encontrar o apoio que <br />
           precisa para cuidar de quem você ama.
         </p>
         <div className="botoes">
           <Link to="/cadastroPessoa" type="button" className="button1">Sou um paciente</Link>
           <Link to="/cadastroPJ" type="button" className="button2" size="lg" variant="outline">Sou uma clínica</Link>
         </div>
       </div>
       <div className="image-container">
         <img src={imageElipse} alt="Elipse" className="background-image" />
         <img src={imageBebe} alt="Child" className="overlay-image" />
       </div>
     </section>


     {/* Sessão: Sobre Nós */}
     <section className='about' id='about'>
       <div className='sectionAbout'>
         <h2 id='title'>Como Funciona?</h2>
         <p id='subtitle'>O Connect Azul conecta famílias com profissionais<br />
           especializados em autismo, oferecendo perfis detalhados e<br />
           uma busca avançada. Facilita a comunicação e promove<br />
           uma comunidade de suporte para melhorar a qualidade de vida.</p>
         <div>
           <Button className="rounded-sm bg-customBlue" size="lg">Crie já seu cadastro!</Button>
         </div>
       </div>
       <div className='imageAbout'>
         <img src={imageAbout} alt="image" className="aboutImage" />
       </div>
       <div className="Puzzle">
         <img src={pecaAbout} alt="quebra-cabeça" className="puzzleImage" />
       </div>
     </section>


     {/* Sessão: Recursos */}
     <section className='recursos' id='recursos'>
       <div className='cabecalho'>
         <img src={cabecalho} alt="cabeçalho" className="cabecalhoImage" />
       </div>
       <div className="resources-section">
         <h2>Recursos</h2>
         <div className="resources-container">
           <div className="resource-column">
             <h3>Fonoaudiologia no Autismo:</h3>
             <ul>
               <li><a href="#link1">A Importância da Fonoaudiologia no Autismo - Autismo em Foco</a></li>
               <li><a href="#link2">Fonoaudiologia para crianças com autismo – Ipa Therapy</a></li>
             </ul>
           </div>
           <div className="resource-column">
             <h3>Terapia Ocupacional:</h3>
             <ul>
               <li><a href="#link3">Terapia Ocupacional e Autismo - Viva e Deixe Viver</a></li>
             </ul>
           </div>
           <div className="resource-column">
             <h3>Musicoterapia no Autismo:</h3>
             <ul>
               <li><a href="#link4">Musicoterapia no Tratamento do Autismo</a></li>
               <li><a href="#link5">A influência da Musicoterapia em crianças com autismo – UCLSC</a></li>
             </ul>
           </div>
         </div>
       </div>
     </section>


     <section className='contato' id='contato'>
       <div>
         <h1>OLÁ MUNDO!</h1>
       </div>
     </section>
   
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
 section: {
   padding: '2em',
   textAlign: 'center',
 },
};


export default Inicio;