import React, { useContext } from "react";
import "./Cart.css";
import { Col, Container, Row } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { DataProvider } from "../context";
const Cart = () => {
  const { CartItem, setCartItem, addToCart, decreaseQty, deleteQty, count, setCount } = useContext(DataProvider);


  return (
    <div className="cartContainer">
      <div className="cartTittle">
        <h2>Tu carrito</h2>

      </div>



      <Container className="containerProds">
        {CartItem == "" ? (
          <div className="vacio">
            <p>Agrega productos al carrito </p>
            <Button as={Link} to="/Productos" className="continue">
              Ir de compras
            </Button>
          </div>
        ) : (
          <>
            {CartItem.map((item) => (
              <Row key={item.id} className="prodGrid">
                <Col m={2} className="itemImg">
                  <Link to={`/detail/${item.name}`}>
                    <img src={item.cover} width="100px" alt={item.name}></img>
                  </Link>
                </Col>
                <Col m={3} className="itemName">
                  {item.name} por {item.weight}
                </Col>
                <Col m={2} className="itemCont">{item.contador}</Col>
                <Col m={2} className="itemPrice">{`$ ${item.price}`}</Col>
                <Col m={2} className="subTotal">{`$ ${item.contador * item.price
                  }`}</Col>
                <Col m={1} className="itemClear">
                  <Button
                    className="clearProd"
                    onClick={() => remove(item.id)}
                  >
                    <FaTrash />
                  </Button>
                </Col>
              </Row>
            ))}
          </>
        )}
      </Container>

      <hr />
      {CartItem == "" ? (
        <></>
      ) : (
        <div className="cartBottom">
          <div className="total">TOTAL: ${totalPrice}</div>
          <div className="cartButtons">
            <Button as={Link} to="/" className="continue">
              Continuar comprando
            </Button>
            <div className="bottomButtons">
              <Button className="clearCart" onClick={removeAll}>
                vaciar carrito
              </Button>
              <Button className="finalizar ">
                FINALIZAR COMPRA
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;