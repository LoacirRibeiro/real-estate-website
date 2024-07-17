import React, { useEffect } from "react";
import "./About.css";

// importação de icones
import { AiFillCheckCircle } from "react-icons/ai";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";

import Aos from "aos";
import "aos/dist/aos.css";



function Accordion({ title, desc, active, setActive, desActive, setDesActive  }) {
useEffect (() => {
       Aos.init({duration: 2000})
     }, [])

  return (
    <div
      className={
        (active === title ? "activeAccordion" : "")  + " singleAccordion"
      }
    >
      <span 
        onClick={() => setActive(title)}
        className={
          (active === title ? " activeTitle" : "" ) + " accordionTitle" + " flex"
        }
      >
        <span className=" flex">
          <AiFillCheckCircle className="icon" />
          <span className="titleText">{title}</span>
        </span>
        <span className="dropDownIcon">
          {active === title ? (
            <BiSolidUpArrow className="icon" />
          ) : (
            <BiSolidDownArrow className="icon" />           
          )}
          
          
        </span>
      </span>
      <p  className={(active === title ? " show" : " ") + " description"}>
        {desc}
      </p>
    </div>
  );
}

export default Accordion;
