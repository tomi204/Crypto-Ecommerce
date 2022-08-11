import React from "react";
import SProducto from "./SProducto";
import "./productosC.css";
import { useParams } from "react-router-dom";
const ProductDetails = () => {
  let { id } = useParams();
  let filtrado = SProducto.filter((item) => Number(item.id) === Number(id));
  return (
    <>
      {filtrado.map((value) => {
        return (
          <div>
            <h1>{value.title}</h1>
            <h1>{value.desc}</h1>
            <h2>{value.stock}</h2>
            <img src={value.cover} alt="" className="img-home" />
          </div>
        );
      })}
    </>
  );
};

export default ProductDetails;
