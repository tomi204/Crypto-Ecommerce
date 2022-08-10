import React from "react";
import SProducto from "./SProducto";
import "./productosC.css";
const ProductDetails = () => {
  {
    SProducto.find((value, index) => {
      return (
        <div className="productos" key={index}>
          <div className="all">
            <h1>{value.title}</h1>
            <p>{value.desc}</p>
            <h2>{value.stock}</h2>
            <img src={value.cover} alt="" className="img-home" />
          </div>
        </div>
      );
    });
  }
};

export default ProductDetails;
