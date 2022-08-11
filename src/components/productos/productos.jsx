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
              <h2>{value.stock}</h2>
              <button className="boton-detalles">
                <Link to={`/category/${value.id}`}></Link>
              </button>
              <img src={value.cover} alt="" className="img-home" />
            </div>
          );
        })}
      </div>
    </section>
  );
}
