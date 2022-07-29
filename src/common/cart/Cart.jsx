import React from "react";
import "./Cart.css";
import { FaShoppingCart } from "react-icons/fa";

const Cart = () => {
  return (
    <a href="/cart" className="cart-cart">
      <FaShoppingCart></FaShoppingCart>
    </a>
  );
};

export default Cart;
