import React from "react";
import "./Navbar.css";
import { FaShoppingCart } from "react-icons/fa";
function Navbar() {
  return (
    <nav className="navbar">
      <ul className="ul-n">
        <a href="/home">
          <li>INICIO</li>
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
      <a href="">
        <FaShoppingCart></FaShoppingCart>
      </a>
    </nav>
  );
}
export default Navbar;
