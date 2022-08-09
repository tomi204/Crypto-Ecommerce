import React from "react";
import SProducto from "./SProducto";
import "./index.css";
import ProductDetails from "./ProductDetails";
const Productos = () => {
  SProducto.map((value, index) => {
    return (
      <>
        <section className="section-products">
          <div className="box" key={index}>
            <div className="left">
              <ProductDetails />
              <p>{value.desc}</p>
              <img src={value.cover} alt="" className="img-home" />
            </div>
          </div>
        </section>
      </>
    );
  });
};
export default Productos;
