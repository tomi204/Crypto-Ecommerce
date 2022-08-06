import React from "react";
import producto from "./Producto";
import "./index.css";
export const productos = () => {
  producto.map((value, index) => {
    return (
      <>
        <section className="section-products">
          <div className="box" key={index}>
            <div className="left">
              <h1>{value.title}</h1>
              <p>{value.desc}</p>
              <img src={value.cover} alt="" className="img-home" />
              <p>{value.stock}</p>
            </div>
          </div>
        </section>
      </>
    );
  });
};
