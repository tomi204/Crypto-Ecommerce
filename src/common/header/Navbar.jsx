import React from "react";
import "./Navbar.css";
import { FaShoppingCart } from "react-icons/fa";

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
        <FaShoppingCart className="carrito"></FaShoppingCart>
      </ul>
    </nav>
  );
}
export default Navbar;
