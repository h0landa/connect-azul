import React from "react";
import {Link}  from "react-router-dom";

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
            <Link to="/inicio" style={styles.navItem} onClick={(e) => smoothScroll(e, 'inicio')}>
              Início
            </Link>
          </li>
          <li>
            <Link to="/inicio" style={styles.navItem} onClick={(e) => smoothScroll(e, 'about')}>
              Como Funciona
            </Link>
          </li>
          <li>
            <Link to="/inicio" style={styles.navItem} onClick={(e) => smoothScroll(e, 'recursos')}>
              Recursos
            </Link>
          </li>
          <li>
            <Link to="/inicio" style={styles.navItem} onClick={(e) => smoothScroll(e, 'contato')}>
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    );
  }

  export default Navbar;