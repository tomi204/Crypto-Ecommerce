import React from "react";
import { useState } from "react";
import { CartContext } from "./CartContext";
import "./Cart.css"
const Contador = ({ onAdd }) => {
  const [contador, setContador] = useState(1);
  // const stock = SProducto.map((prod) => prod.stock);
  // const [cantStock, setCantStock] = useState(stock)
  const stock = 15;
  const agregarAlContador = () =>
    contador >= stock ? alert : setContador(contador + 1);
  // restar uno al contador
  const restarAlContador = () =>
    contador > 0 ? setContador(contador - 1) : null;
  // restar contandor
  const resetAlContador = () =>
    stock > 0 ? setContador(contador === 0) : null;


  return (
    <div className="carrito-SR">
      <button className="btnN" onClick={restarAlContador}>
        restar 1
      </button>
      <p className="Contador">{contador}</p>
      <button className="btnA" onClick={agregarAlContador}>
        agregar 1
      </button>

      <button className="btnR" onClick={resetAlContador}>
        reset
      </button>
      <button disabled={stock <= 0} onClick={() => onAdd(contador)} className="agregar-carrito" >
        Agregar al carrito
      </button>
    </div>
  );
};

export default Contador;
