import React, { useEffect } from "react";
import "./Listing.css";
// importação de icones
import { FaBed } from "react-icons/fa";
import { MdFastfood, MdPool } from "react-icons/md";
import { AiOutlineWifi } from "react-icons/ai";

// importação de imagens
import image1 from "../../Assets/house1.png";
import image2 from "../../Assets/house2.png";
import image3 from "../../Assets/house3.png";
import image4 from "../../Assets/house4.png";
import image5 from "../../Assets/house5.png";
import image6 from "../../Assets/house6.png";



// vamos usar o método map para percorrer uma lista de propriedades
const properties = [
  {
    id: 1,
    image: image1,
    name: "Propriedade rural, Itália",
    price: "3,445",
    desc: "Uma luxuosa vila balinesa cercada por jardins exuberantes",
    beds: 6,
  },

  {
    id: 2,
    image: image2,
    name: "Mansão de água",
    price: "4,100",
    desc: "Uma opulenta mansão aquática em Miami Beach com cais privado",
    beds: 4,
  },
  {
    id: 3,
    image: image3,
    name: "Cobertura de luxo, NY",
    price: "5,000",
    desc: "Um chanteau histórico na região vinícola de Bordeaux. Estrategicamente em NY",
    beds: 5,
  },

  {
    id: 4,
    image: image4,
    name: "Vila à beira-mar, CA",
    price: "5,600",
    desc: "Esta vila à beira-mar em Malibu oferece acesso direto ao oceano",
    beds: 7,
  },
  {
    id: 5,
    image: image5,
    name: "Elegante chanteau, França",
    price: "3,900",
    desc: "Um castelo histórico na região vinícola de Bordeaux, com vinhedos",
    beds: 8,
  },

  {
    id: 6,
    image: image6,
    name: "Brownstone histórico, Boston",
    price: "4,700",
    desc: "Um encantador Brownstone histórico no bairro de Back Bay, em Boston",
    beds: 6,
  },
];

import Aos from "aos";
import "aos/dist/aos.css";


           

function Listing() {

useEffect (() => {
       Aos.init({duration: 2000})
     }, [])
            
  return (
    <div className="Listing container section">
      <div className="secContainer">
        <div className="secHeader">
          <span className="orangeText">Nossa Lista</span>
          <h1 data-aos='fade-up' className="title">
            Compre e venda seus ativos
            <span data-aos='fade-up' className="orangeDot"> . </span>
          </h1>
          <p data-aos='fade-up'>
            Sua agência imobiliária é a chave para descobrir economias ocultas
          </p>
          <div className="btns flex">
            <button data-aos='fade-up' className="btn active"> Exclusivo</button>
            <button data-aos='fade-up' className="btn"> Padrão</button>
          </div>
        </div>

        <div className="secContent grid">
          {/* usar método de matriz de mapa */}
          {properties.map(({ id, image, name, price, desc, beds }) => {
            return (
              <div key={id} className="singleListing">
                <div data-aos='fade-down' className="imgDiv">
                  <img src={image} alt="House Image"></img>
                </div>
                <div data-aos='fade-up' className="info">
                    <h2 className="name">{name}</h2>
                  <span className="price">
                    <span className="digits">{price}</span>
                    <span className="orangeText">USD</span>
                    <span className="duration">/Day</span>
                  </span>
                  <p>
                   {desc}
                  </p>
                  <div className="ammenities flex">
                    <span className="flex">
                      <FaBed className="icon" />
                      <blockquote>{beds}</blockquote>
                    </span>

                    <span className="flex">
                      <MdPool className="icon" />
                    </span>

                    <span className="flex">
                      <AiOutlineWifi className="icon" />
                    </span>

                    <span className="flex">
                      <MdFastfood className="icon" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Listing;
