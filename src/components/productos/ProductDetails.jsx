import React from "react";
import SProducto from "./SProducto";
import "./productosC.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Contador from "../CartItems/Contador";
import { useState } from "react";
const ProductDetails = () => {
  const [goToCart, setCart] = useState(false);
  let { id } = useParams();

  const onAdd = (quantity) => {
    setCart(true);
    // addCart(value, quantity);
  }
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
              <h2> ${value.price}</h2>
              <h2>Hay {value.stock} en stock</h2>

              {goToCart ?
                <Link to={"/Cart"}>Terminar la compra</Link>
                :
                <Contador onAdd={onAdd} />

              }
            </div>
          </div>
        );
      })}
    </>
  );
};
;

export default ProductDetails;
