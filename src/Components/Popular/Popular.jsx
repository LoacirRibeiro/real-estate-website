import React, { useEffect } from "react";
import "./Popular.css";
// importação de icones
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

// importação de imagens
import image1 from "../../Assets/image1.jpeg";
import image2 from "../../Assets/image2.jpeg";
import image3 from "../../Assets/image3.jpeg";
import image4 from "../../Assets/image4.jpg";

import Aos from "aos";
import "aos/dist/aos.css";



function Popular() {
  useEffect (() => {
       Aos.init({duration: 2000})
     }, [])

  return (
    <div className="Popular container section">
      <div className="secContainer">
        <div className="secHeader flex">
          <div className="textDiv">
            <span data-aos='fade-down' className="orangeText">Melhor escolha</span>
            <h1 data-aos='fade-down'className="title">
              Residências populares
              <span className="orangeDot"> . </span>
            </h1>
          </div>

          <div data-aos='fade-down' className="icons flex">
            <BiLeftArrowAlt className="icon" />
            <BiRightArrowAlt className="icon" />
          </div>
        </div>

        <div className="secContent grid">
          {/* casa 1 */}
          <div data-aos='fade-down' className="singleProperty">
            <div className="imgDiv">
              <img src={image1} alt="House image"></img>
            </div>
            <div  data-aos='fade-up' className="info">
              <span className="price">
                <span className="orangeText"> $ </span>
                <span className="digits">48,885 </span>
              </span>
              <h2 className="name">Alivia Prica Jardfin</h2>
              <p>
                Uma cobertura deslumbrante com vista para o horizonte e terraço
                privado.
              </p>
            </div>
          </div>
          {/* casa 2 */}
          <div data-aos='fade-down' className="singleProperty">
            <div className="imgDiv">
              <img src={image2} alt="House image"></img>
            </div>
            <div data-aos='fade-up' className="info">
              <span className="price">
                <span className="orangeText"> $</span>
                <span className="digits">68,454 </span>
              </span>
              <h2>Mountain Retreat, aspen</h2>
              <p>
                Um retiro isolado nas montanhas em Aspen com acesso direto às
                pistas de esqui.
              </p>
            </div>
          </div>
          {/* casa 3 */}
          <div data-aos='fade-down' className="singleProperty">
            <div className="imgDiv">
              <img src={image3} alt="House image"></img>
            </div>
            <div data-aos='fade-up' className="info">
              <span className="price">
                <span className="orangeText"> $</span>
                <span className="digits">48,500 </span>
              </span>
              <h2>condomínio contemporâneo</h2>
              <p>Um condomínio elegante e moderno em Los Angeles.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popular;
