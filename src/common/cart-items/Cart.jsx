import React from "react";
import { useState } from "react";
import "./Cart.css";

export default function Contador({ inicial, stock }) {
  const [contador, setContador] = useState(inicial);
  const agregarAlContador = () =>
    contador >= stock ? alert : setContador(contador + 1);
  const restarAlContador = () =>
    contador > 0 ? setContador(contador - 1) : null;

  return (
    <div className="d-flex flex-row justify-content-center mt-2">
      <button
        className="btn btn-outline-info p-2 boton-cant"
        onClick={restarAlContador}
      ></button>
      <p className="p-2">{contador}</p>
      <button
        className="btn btn-outline-info p-2 boton-cant"
        onClick={agregarAlContador}
      >
        +
      </button>
    </div>
  );
}
