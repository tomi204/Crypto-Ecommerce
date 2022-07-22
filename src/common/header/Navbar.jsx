import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <a href="/home">
          <li>HOME</li>
        </a>
        <a href="">
          <li>PRODUCTOS</li>
        </a>
        <a href="">
          <li>SERVICIO TECNICO</li>
        </a>
        <a href="">
          <li>NOSOTROS</li>
        </a>
      </ul>
    </nav>
  );
}
export default Navbar;
