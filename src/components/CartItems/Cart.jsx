import React, { useContext } from "react";
import "./Cart.css";
import { Col, Container, Row } from "react-bootstrap";

import { Link } from "react-router-dom";
import { DataContext } from "../context";
const Cart = () => {
  // data context from context
  const { CartItem, setCartItem, addToCart, decreaseQty, deleteQty, count, setCount } = useContext(DataContext);
  function createProduct(id, tittle, cover, desc, price, stock, category) {
    let product = {
      id,
      tittle,
      cover,
      desc,
      price,
      stock,
      category
    }
    addToCart(product)


  }

  function decreaseProduct(id, tittle, cover, desc, price, stock, category) {
    let product = {
      id,
      tittle,
      cover,
      desc,
      price,
      stock,
      category
    }
    decreaseQty(product)
  }

  return (

    <div className="cartTittle">
      <h2>Tu carrito</h2>

      <Container className="containerProds">
        {
          CartItem.length === 0 ?
            <div className="vacio">
              <p>Agrega productos al carrito </p>

            </div>
            :
            <>
              {CartItem.map((item) => (
                <div>
                  <h1>{item.tittle}</h1>
                  <button className="eliminar" onClick={() => deleteQty(item.id)}>eliminar producto</button>
                  <button className="btnA" onClick={() => createProduct(item.id, item.tittle, item.price, item.cover, item.category, item.stock, item.desc)}>+</button>
                  <h1>{item.qty}</h1>
                  <button className="btnN" onClick={() => decreaseProduct(item.id, item.tittle, item.price, item.cover, item.category, item.stock, item.desc)}>-</button>
                </div>
              ))}
            </>
        }




      </Container>


      {CartItem.length === 0 ?
        <></>
        :
        <div className="cartBottom">

        </div>
      }
    </div>
  );
};

export default Cart;