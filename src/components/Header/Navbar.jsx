import React from "react";
import "./Navbar.css";
import { FaShoppingCart } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { ConnectButton } from "@rainbow-me/rainbowkit";
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
        <li>
          <ConnectButton showBalance={false} />
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
