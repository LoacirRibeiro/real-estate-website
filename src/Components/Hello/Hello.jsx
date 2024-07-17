import React, { useEffect } from "react";
import "./Hello.css";
// importção de icones
import { HiLocationMarker } from "react-icons/hi";

// importção de icones
import Image from "../../Assets/hello Image.png";

// importação de Aos Animação
import Aos from "aos";
import "aos/dist/aos.css";



function Hello() {

  useEffect (() => {
    Aos.init({duration: 2000})
  }, [])

  return (
    <div className="hello">
      <div className="secContainer container flex">
        <div className="textDiv">
          {/* Animação data-aos='fade-up' subir */}
          <h1 data-aos='fade-up'>Descubra o Imóvel mais adequado</h1>
          <span className="design"></span>
          <p data-aos='fade-up'>
            Encontre facilmente uma variedade de imóveis que se adequam a você,
            Esqueça todas as dificuldades em encontrar uma residência para você.
          </p>

          <div data-aos='fade-up'className="searchBar flex">
            <div className="inputBox flex">
              <HiLocationMarker className="icon" />
              <input type="text" placeholder="Pesquisar Localização" />
            </div>
            <button className="btn">Procurar</button>
          </div>

          <div data-aos='fade-up' className="numbers flex">
            
            <div className="singleNumber">
              <span>
                9k <blockquote> + </blockquote>
                <small>Produtos premium</small>
              </span>
            </div>

            <div className="singleNumber">
              <span>
                2k <blockquote> + </blockquote>
                <small>Clientes satisfeitos</small>
              </span>
            </div>

            <div className="singleNumber">
              <span>
                48k <blockquote> + </blockquote>
                <small>premiados</small>
              </span>
            </div>

          </div>
        </div>
        <div data-aos='fade-up' className="imgDiv">
          <img src={Image} alt="home image"></img>
        </div>
      </div>
    </div>
  );
}

export default Hello;
