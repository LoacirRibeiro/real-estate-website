import React, { useEffect } from "react";
import './Sponsors.css'

// importação de imagens
import logo1 from '../../Assets/logo1.png'
import logo2 from '../../Assets/logo2.png'
import logo3 from '../../Assets/logo3.png'
import logo4 from '../../Assets/logo4.png'

import Aos from "aos";
import "aos/dist/aos.css";



function Sponsors (){
    
    useEffect (() => {
       Aos.init({duration: 2000})
     }, [])

    return(
        <div data-aos='fade-up' className="Sponsors">
            <div className="secContainer flex">
                <span>
                    <img src={logo1} alt='>Logo image' />
                </span>
                <span>
                    <img src={logo2} alt='>Logo image' />
                </span>
                <span>
                    <img src={logo3} alt='>Logo image' />
                </span>
                <span>
                    <img src={logo4} alt='>Logo image' />
                </span>
            </div>
        </div>
    );
}

export default Sponsors;