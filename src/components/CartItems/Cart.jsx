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
  console.log("holhohlolla", CartItem)


  return (

    <div className="cartTittle">


      <Container className="containerProds">
        {
          CartItem.length === 0 ?
            <div className="vacio">
              <h2>Tu carrito esta vacio</h2>
              <Link to={"../Productos"}> Ir a productos </Link>


            </div>
            :
            <>
              {CartItem.map((item) => (
                <div className="item-products">
                  <h3>{item.tittle}</h3>
                  <img src={item.desc} alt="" className="cart-Item-Image" />
                  <br></br>
                  <button className="btnA" onClick={() => createProduct(item.id, item.tittle, item.price, item.cover, item.category, item.stock, item.desc)}>+</button>
                  <button className="btnN" onClick={() => decreaseProduct(item.id, item.tittle, item.price, item.cover, item.category, item.stock, item.desc)}>-</button>
                  <h2 className="contador">{item.qty}</h2>
                  <h2>${item.qty * item.cover}</h2>
                  <button className="eliminar" onClick={() => deleteQty(item.id)}>eliminar producto</button>

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