import React from "react";
import "./Navbar.css";
import { FaShoppingCart } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
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

        <NavLink to={"./Cart"}>
          <li>
            <FaShoppingCart></FaShoppingCart>
          </li>
        </NavLink>
        <li></li>
      </ul>
    </nav>
  );
}
export default Navbar;
