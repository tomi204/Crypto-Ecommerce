import React from "react";
import "./Cart.css";
import Contador from "./Contador";
export default function Cart() {
  return (
    <section className="carrito-main">
      <div className="box-compra">
        <Contador stock={5} />
      </div>
    </section>
  );
}
