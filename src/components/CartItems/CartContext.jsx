import React from "react";
import { useContext } from "react";
import { useState } from "react";
import Productos from "../Productos/Productos";
import SProducto from "../Productos/SProducto";
import { useParams } from "react-router-dom";
import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";

const CartContext = React.createContext([]);
export const useCartContext = () => useContext(CartContext);
const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);


  const clearCart = () => setCart([]);

  const isInCart = (id) => (cart.find((product) => product.id) ? true : false);

  const removeP = (id) => setCart(cart.filter((SProducto) => SProducto.id !== id));

  const addCart = (prod, newQuantity) => {
    newCart = cart.filter((prod) => SProducto.id !== SProducto.id);

    newCart.push({ ...SProducto, quantity: newQuantity });
    setCart(newCart);
  };

  const totalPrice = () => {
    return cart.reduce((prev, act) => prev + act.quantity * act.price, 0)
  }
  const totalProducts = () => {
    cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0)
  }

  return (
    <CartContext.Provider value={{
      clearCart,
      isInCart,
      removeP,
      addCart,
      totalPrice,
      totalProducts,
      cart
    }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
