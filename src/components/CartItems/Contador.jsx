import React from "react";
import { useState } from "react";
import SProducto from "../Productos/SProducto";
const Contador = () => {
  const [contador, setContador] = useState(1);
  const stock = SProducto.map((prod) => prod.stock);
  const agregarAlContador = () =>
    contador >= stock ? alert : setContador(contador + 1);
  const restarAlContador = () =>
    contador > 0 ? setContador(contador - 1) : null;
  const resetAlContador = () =>
    contador > 0 ? setContador(contador === 0) : null;
  return (
    <div className="carrito-SR">
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
    </div>
  );
};

export default Contador;
