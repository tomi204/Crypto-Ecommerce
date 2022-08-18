import React from "react";
import { useContext } from "react";
import { useState } from "react";
import Productos from "../Productos/Productos";
const CartContext = React.createContext("");

export const useCartContext = () => useContext(CartContext);
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const clearCart = () => setCart([]);
  const isInCart = (id) => (cart.find((product) => product.id) ? true : false);
  const removeP = (id) => setCart(cart.filter((product) => product.id !== id));
  const addCart = (Productos, newQuantity) => {
    const newCart = cart.filter((prod) => prod.id !== Productos.id);
    newCart.push({ ...Productos, quantity: newQuantity });
    setCart(newCart);
  };
  return (
    <CartContext.Provider
      value={{
        clearCart,
        isInCart,
        removeP,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
