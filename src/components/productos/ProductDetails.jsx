import React from "react";
import SProducto from "./SProducto";
import "./productosC.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Cart from "../CartItems/Cart";
const ProductDetails = () => {
  let { id } = useParams();
  let filtrado = SProducto.filter((item) => Number(item.id) === Number(id));
  return (
    <>
      {filtrado.map((value) => {
        return (
          <div>
            <div className="list-item">
              <h1>{value.title}</h1>
              <h3>{value.desc}</h3>
              <img src={value.cover} alt="" className="img-details" />
              <h2>{value.stock}</h2>

              <Link to={"/Cart"}>Añadir al carrito</Link>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProductDetails;
