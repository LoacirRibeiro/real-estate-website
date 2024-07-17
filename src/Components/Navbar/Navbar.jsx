import React, { useState } from "react";
import "./Navbar.css";

// importação de icones
import { SiTreehouse } from "react-icons/si";
import { AiFillCloseCircle } from "react-icons/ai";
import { PiDotsNineBold } from "react-icons/pi";

function Navbar() {
  // função para mostrar a barra de navegação
  const [menu, setMenu] = useState("menu");
  const showNavbar = () => {
    setMenu("showNavbar menu");
  };

  // função para remover a barra de navegação

  const removeNavbar = () => {
    setMenu("menu");
  };

  // função para adicionar um fundo à barra de navegação
  const[transparente, setTransparente] = useState("navbar")
  const addBg = () => {
    if (window.scrollY >= 10){
      setTransparente('navbar addBackground')
    } else{
      setTransparente("navbar");
    }
  }
  window.addEventListener('scroll', addBg)

  return (
    <div className={transparente}>
      <div className="logoDiv">
        <SiTreehouse className="icon" />
        <span>Homuz</span>
      </div>

      <div className={menu}>
        {/*<div className="menu"> adiciona {menu} ao menu*/}
        <ul>
          <li className="navList" onClick={removeNavbar}>
            Propriedades{" "}
          </li>
          <li className="navList" onClick={removeNavbar}>
            Serviços
          </li>
          <li className="navList" onClick={removeNavbar}>
            Produtos
          </li>
          <li className="navList" onClick={removeNavbar}>
            Sobre nós
          </li>
        </ul>
        {/* ícone para fechar a barra de navegação */}
        <AiFillCloseCircle className="icon closeIcon" onClick={removeNavbar} />
      </div>
      <button className="contactBtn btn">Contato</button>

      {/* ícone para abrir/mostrar em dispositivos pequenos */}
      <PiDotsNineBold className="icon menuIcon" onClick={showNavbar} />
    </div>
  );
}

export default Navbar;
