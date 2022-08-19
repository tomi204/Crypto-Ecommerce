import React from "react";
import "./Cart.css";
import { useCartContext } from "./CartContext";
import Contador from "./Contador";
import { Link } from "react-router-dom";
export default function Cart() {
  const { cart, totalPrice } = useCartContext();
  if (cart.length === 0) {
    return (
      <>
        <h2 className="h2-carrito">No hay nada en el carrito</h2>

        <Link to={"../Productos"}>Ir a comprar</Link>
      </>
    )

  }
  return (
    <section className="carrito-main">
      <div className="box-compra">
        <Contador />
      </div>
    </section>
  );
}
