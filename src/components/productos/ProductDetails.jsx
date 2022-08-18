import React from "react";
import SProducto from "./SProducto";
import "./productosC.css";
import { useCartContext } from "../CartItems/CartContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Contador from "../CartItems/Contador";
const ProductDetails = () => {
  let { id } = useParams();
  //const { addCart } = useCartContext;
  // const onAdd = (quantity) => {
  //  addCart(data, quantity);
  //  };
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
              <Contador />
              <Link to={"/Cart"}>Añadir al carrito</Link>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProductDetails;
