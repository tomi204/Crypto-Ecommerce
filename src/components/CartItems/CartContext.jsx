import React from "react";
import { useContext } from "react";
import { useState } from "react";
import Productos from "../Productos/Productos";

import SProducto from "../Productos/SProducto";
import { useParams } from "react-router-dom";

const CartContext = React.createContext([]);
export const useCartContext = () => useContext(CartContext);
const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);


  const clearCart = () => setCart([]);

  const isInCart = (id) => (cart.find((product) => product.id) ? true : false);

  const removeP = (id) => setCart(cart.filter((SProducto) => SProducto.id !== id));

  const addCart = (prod, newQuantity) => {
    const newCart = cart.filter((prod) => SProducto.id !== SProducto.id);

    newCart.push({ ...SProducto, quantity: newQuantity });
    setCart(newCart);
  };
  return (
    <CartContext.Provider value={{
      clearCart,
      isInCart,
      removeP,
      addCart
    }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
