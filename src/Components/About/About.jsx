import React, { useState } from "react";
import "./About.css";
import Accordion from "./accordion";

// importação de imagens
import image from '../../Assets/About image.png'


function About() {
    const [active, setActive] = useState('title');
    const [desActive, setDesActive] = useState('title');

  return (
    <div className="About section container">
      <div className="secContainer flex">
        <div className="imgDiv">
          <img src={image} alt="About Image" />
        </div>

        <div className="textDiv">
          <div className="secHeader flex">
            <div className="secTitle">
              <span className="orangeText">Nossos Valores</span>
              <h1>
                Valor que damos a você
                <span className="orangeDot"> . </span>
              </h1>
              <p>
                Estamos sempre prontos para ajudar, oferecendo os melhores
                serviços para você. acreditamos que um bom lugar para morar pode
                tornar sua vida melhor.
              </p>
            </div>
          </div>

          <div data-aos='fade-up' className="accordion grid">
            {/* single Accordion */}
            <Accordion
              title="Histórico comprovado"
              desc="Nossa agência tem um histórico comprovado de ajudar clientes
               com sucesso na compra e venda de propriedades. temos um 
               histórico de obtenção de excelentes resultados, seja 
               garantindo as melhores ofertas para os compradores ou 
               maximizando o preço de venda para os vendedores."
              active={active}
              setActive={setActive}
              desActive={desActive}
              setDesActive={setDesActive}
              
            />
{/* vamkos daicionar mais cards */}
            <Accordion
              title="Conhecimento do mercado local"
              desc="Possuímos profundo conhecimento do mercado imobiliário local. 
              Nossos agentes são bem versados ​​nas tendências atuais do mercado, 
              preços e especificidades do bairro. Essa experiência nos permite 
              fornecer insights valiosos aos clientes."
              active={active}
              setActive={setActive}
            />

            <Accordion
              title="Serviços personalizados"
              desc="Entendemos que cada cliente tem necessidades e objetivos 
              únicos. por isso oferecemos um serviço personalizado e adaptado a 
              cada indivíduo."
              active={active}
              setActive={setActive}
            />

            <Accordion
              title="Práticas Éticas"
              desc="A integridade está no centro da nossa agência. defendemos os
               mais altos padrões éticos e mantemos a transparência durante todo
                o processo imobiliário."
              active={active}
              setActive={setActive}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
