import React from "react";
import SProducto from "./SProducto";
const ProductDetails = (SProducto) => {
  return (
    <div>
      <h1>{title}</h1>
      <h2 stock={stock} />
    </div>
  );
};

export default ProductDetails;
