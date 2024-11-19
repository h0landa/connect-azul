import React from "react";
import '../styles/telaPrincipal.css'

import imageSlogan from "../assets/Slogan.png";

function TelaPrincipal () {
  
  return (
    <div className="tela-principal">

            <div className='slogan'>
            <Link to="/"><img src={imageSlogan} alt="Slogan" className="Slogan" /></Link>
            </div>


      <h1 className="em-cost">
      Pagina em construção!
      </h1>
      <FontAwesomeIcon icon={faGear} />

    </div>
  )

}

export default TelaPrincipal;