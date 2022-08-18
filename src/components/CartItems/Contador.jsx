import React from "react";
import { useState } from "react";
import SProducto from "../Productos/SProducto";
const Contador = () => {
  const [contador, setContador] = useState(1);
  // const stock = SProducto.map((prod) => prod.stock);
  const stock = 15;
  // agregar 1 al carrito
  const agregarAlContador = () =>
    contador >= stock ? alert : setContador(contador + 1);
  console.log(stock);
  // restar uno al contador
  const restarAlContador = () =>
    contador > 0 ? setContador(contador - 1) : null;
  // restar contandor
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
      <button className="agregar-carrito" disabled={stock <= 0} onClick={() => onAdd(contador)} >
        Agregar al carrito
      </button>
    </div>
  );
};

export default Contador;
