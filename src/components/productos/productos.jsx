import React from "react";
import SProducto from "./SProducto";
import "./index.css";
export const productos = () => {
  SProducto.map((value, index) => {
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
