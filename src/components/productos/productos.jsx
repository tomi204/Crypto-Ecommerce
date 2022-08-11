import React from "react";
import "./productosC.css";
import { Link } from "react-router-dom";
import SProducto from "./SProducto";
export default function Productos() {
  return (
    <section className="section-products">
      <div className="product-d">
        {SProducto.map((value, index) => {
          return (
            <div className="div-product" key={index}>
              <h1>{value.title}</h1>
              <img src={value.cover} alt="" className="img-products" />
              <Link to={`/category/${value.id}`}>
                <button className="boton-detalles">Ver detalles</button>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
