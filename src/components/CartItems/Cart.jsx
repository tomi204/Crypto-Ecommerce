import React from "react";
import "./Cart.css";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import cartItem from "./CartItem";
export default function Cart() {
  const { cart, removeFromCart, removeAll, totalPrice } = useContext(CartContext);
  if (cart.length === 0) {
    return (
      <>
        <h2 className="h2-carrito">No hay nada en el carrito</h2>
        <br></br>
        <Link to={"../Productos"}>Ir a comprar</Link>
      </>
    )
  }
  return (<>
    <section className="carrito-main">
      <div className="box-compra">
        <h1>Estos son tus productos</h1>

        {
          cart.map(Item => <cartItem key={SProducto.id} SProducto={SProducto} />)
        }

        <p> total :{totalPrice()}</p>
      </div>
    </section></>
  );
}
