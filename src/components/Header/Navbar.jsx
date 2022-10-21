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
          <li className="li-inicio">INICIO</li>
        </NavLink>
        <NavLink to={"./Productos"}>
          <li className="li-inicio">PRODUCTOS</li>
        </NavLink>

        <NavLink to={"./Cart"}>
          <li className="li-inicio">
            <FaShoppingCart></FaShoppingCart>
          </li>
        </NavLink>
        <li>
          <ConnectButton
            showBalance={false}
            accountStatus={{
              smallScreen: "avatar",
              largeScreen: "full",
            }}
            chainStatus={{
              smallScreen: "icon",
              largeScreen: "full",
            }}
          />
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
