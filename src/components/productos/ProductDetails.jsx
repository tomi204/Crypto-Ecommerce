import React from "react";
import SProducto from "./SProducto";
const ProductDetails = () => {
  {
    SProducto.map((value, index) => {
      return (
        <>
          <div className="box" key={index}>
            <div className="left">
              <h1>{value.title}</h1>
              <p>{value.desc}</p>
              <h2>{value.stock}</h2>
              <img src={value.cover} alt="" className="img-home" />
            </div>
          </div>
        </>
      );
    });
  }
};

export default ProductDetails;
