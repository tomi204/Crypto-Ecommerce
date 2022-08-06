import React from "react";
import { useState } from "react";
import "./Cart.css";
export default function Cart(props) {
  const [contador, setContador] = useState(1);
  const stock = 20;
  const agregarAlContador = () =>
    contador >= stock ? alert : setContador(contador + 1);
  const restarAlContador = () =>
    contador > 0 ? setContador(contador - 1) : null;
  const resetAlContador = () =>
    contador > 0 ? setContador(contador === 0) : null;

  return (
    <section className="Carrito">
      <button className="btnN" onClick={restarAlContador}>
        -
      </button>
      <p className="Contador">{contador}</p>
      <button className="btnA" onClick={agregarAlContador}>
        +
      </button>
      <button className="btnR" onClick={resetAlContador}>
        reset
      </button>
    </section>
  );
}
