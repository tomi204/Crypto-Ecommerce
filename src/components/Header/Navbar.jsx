import React from "react";
import "./Navbar.css";
import { FaShoppingCart } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import MetaBtn from "../Metamask/MetaBtn";
function Navbar() {
  return (
    <nav className="navbar">
      <ul className="ul-n">
        <NavLink to={"./"}>
          <li>INICIO</li>
        </NavLink>
        <NavLink to={"./Productos"}>
          <li>PRODUCTOS</li>
        </NavLink>
        <NavLink to={"/nosotros"}>
          <li>NOSOTROS</li>
        </NavLink>
      </ul>
      <NavLink to={"./Cart"}>
        <FaShoppingCart></FaShoppingCart>
      </NavLink>
      <MetaBtn />
    </nav>
  );
}
export default Navbar;
