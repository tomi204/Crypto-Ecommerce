import React from "react";
import "./Navbar.css";
import { FaShoppingCart } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar">
      <ul className="ul-n">
        <NavLink to={"./Home"}>
          <li>INICIO</li>
        </NavLink>
        <NavLink to={"/Productos"}>
          <li>PRODUCTOS</li>
        </NavLink>
        <NavLink to={"/serviciotecnico"}>
          <li>SERVICIO TECNICO</li>
        </NavLink>
        <NavLink to={"/nosotros"}>
          <li>NOSOTROS</li>
        </NavLink>
      </ul>
      <NavLink to={"./Cart"}>
        <FaShoppingCart></FaShoppingCart>
      </NavLink>
    </nav>
  );
}
export default Navbar;
