import React from "react";
import Cart from "../cart/Cart";
import "./Navbar.css";
function Navbar() {
  return (
    <nav className="navbar">
      <ul>
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
      <Cart />
    </nav>
  );
}
export default Navbar;
