import React from "react";
import logo from "../assets/logo.png";
import "./navbar.css"

function Navbar() {
  return (
    <nav>
      <div>
        <a href="/">
          <img src={logo} alt="Logo Factor BMX" />
        </a>
      </div>
      <div>
        <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/bmxparts">BMX Parts</a></li>
            <li><a href="/protecciones">Protecciones</a></li>
            <li><a href="/contacto">Contacto</a></li>
        </ul>
      </div>
      <div>
        <button>🛒</button>
      </div>
    </nav>
  );
}

export default Navbar;
