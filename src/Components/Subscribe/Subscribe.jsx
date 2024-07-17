import React, { useEffect } from "react";
import './Subscribe.css'

import Aos from "aos";
import "aos/dist/aos.css";

function Subscribe (){
  useEffect (() => {
       Aos.init({duration: 2000})
     }, [])
    
    return(
        <div  className="Subscribe section container">
            <div className="secContent">
               <h1 data-aos='fade-up' >Comece com Homuz</h1> 
               <p data-aos='fade-up'>Inscreva-se e encontre preços super atrativos conosco. 
                Encontre sua residência logo</p>
                <button data-aos='fade-up' className="btn">
                    Iniciar
                </button>
            </div>
        </div>
    );
}

export default Subscribe;