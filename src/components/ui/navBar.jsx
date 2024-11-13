import React from "react";

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
            <a href="#inicio" style={styles.navItem} onClick={(e) => smoothScroll(e, 'inicio')}>Início</a>
          </li>
          <li>
            <a href="#sobre" style={styles.navItem} onClick={(e) => smoothScroll(e, 'about')}>Como Funciona</a>
          </li>
          <li>
            <a href="#recursos" style={styles.navItem} onClick={(e) => smoothScroll(e, 'recursos')}>Recursos</a>
          </li>
          <li>
            <a href="#contato" style={styles.navItem} onClick={(e) => smoothScroll(e, 'contato')}>Contato</a>
          </li>
        </ul>
      </nav>
    );
  }

  export default Navbar;