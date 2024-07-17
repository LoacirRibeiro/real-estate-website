import React, { useEffect } from "react";
import "./Contact.css";

// importação de icones
import { BiSolidMessageDetail, BiSolidPhoneCall, BiSolidVideo } from "react-icons/bi";
import { AiFillMessage } from "react-icons/ai";

// importação de imagens
import image from '../../Assets/Contact image.png'
import Aos from "aos";
import "aos/dist/aos.css";


function Contact() {
useEffect (() => {
       Aos.init({duration: 2000})
     }, [])

  return (
    <div className="Contact container section">
      <div className="secContainer flex">
        <div data-aos='fade-up' className="imgDiv">
            <img src={image} alt='Contact Image'></img>
        </div>

        <div className="textDiv">
          <div className="SecHeader flex">
            <div className="secTitle">
            <span className="orangeText">Contate-nos</span>
            <h1 data-aos='fade-down'>
              {""}
              Maneira fácil de entrar em contato conosco
              <span className="orangeDot">.</span>
            </h1>
            <p data-aos='fade-down'>
              Está com dificuldade em encontrar a casa dos seus sonhos? Precisa
              de ajuda para comprar sua primeira casa? Entre em contato conosco!
            </p>
          </div>
            </div>

            <div  className="secContent grid">
                <div data-aos='fade-up' className="phone active">
                    <div className="info flex">
                        <BiSolidPhoneCall className="icon" />
                        <span >
                            <h4>Telefone</h4>
                            <p>24/7 Suporte</p>
                        </span>
                    </div>
                    <button>Ligar</button>
                </div>

                <div data-aos='fade-up' className="chat">
                    <div  className="info flex">
                        <AiFillMessage className="icon" />
                        <span>
                            <h4>Chat</h4>
                            <p>24/7 Suporte</p>
                        </span>
                    </div>
                    <button>Enviar mensagem</button>
                </div>

                <div data-aos='fade-up' className="videoCall">
                    <div  className="info flex">
                        <BiSolidVideo className="icon" />
                        <span>
                            <h4>Video Chamada</h4>
                            <p>24/7 Suporte</p>
                        </span>
                    </div>
                    <button>Ligar</button>
                </div>

                <div data-aos='fade-up' className="message">
                    <div className="info flex">
                        <BiSolidMessageDetail className="icon" />
                        <span>
                            <h4>mensagem</h4>
                            <p>24/7 Suporte</p>
                        </span>
                    </div>
                    <button>Enviar mensagem</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
