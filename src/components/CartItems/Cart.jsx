import React, { useContext } from "react";
import "./Cart.css";
import { Container } from "react-bootstrap";
import { isRouteErrorResponse, Link } from "react-router-dom";
import { DataContext } from "../context";
import { useAccount, useSendTransaction } from "wagmi";
import { ethers } from "ethers";
import { FaEthereum } from "react-icons/fa";
import { Network, Alchemy } from "alchemy-sdk";
import swal from "sweetalert";
const Cart = () => {
  // data context from context
  const {
    CartItem,
    setCartItem,
    addToCart,
    decreaseQty,
    deleteQty,
    count,
    setCount,
    calcTotal,
    totalQtty,
  } = useContext(DataContext);
  //agregar producto al carrito
  function createProduct(id, tittle, cover, desc, price, stock, category) {
    let product = {
      id,
      tittle,
      cover,
      desc,
      price,
      stock,
      category,
    };
    addToCart(product);
  }
  // sacar producto de carrito
  function decreaseProduct(id, tittle, cover, desc, price, stock, category) {
    let product = {
      id,
      tittle,
      cover,
      desc,
      price,
      stock,
      category,
    };
    decreaseQty(product);
  }
  //order -- codigo viejo
  const order = {
    buyer: {
      name: "Juan",
      phone: "221456789",
      email: "juandoscuatro@gmail.com",
      addres: "Calle falsa 123",
    },
    items: CartItem.map((product) => ({
      id: product.id,
      title: product.tittle,
      price: product.cover,
      quantity: product.qty,
    })),
    total: calcTotal(),
  };
  // alerta personalizada compra exitosa
  const mostrarAlert = () => {
    swal({
      title: "Successful purchase",
      text: "Thank you for your purchase",
      icon: "success",
      button: "Ok",
    });
  };
  //alerta personalizada compra fallida
  const mostrarAlertError = () => {
    swal({
      title: "Error when making a purchase",
      text: "Insufficient funds",
      icon: "error",
      button: "Ok",
    });
  };

  //ethers provider
  const provider = ethers.providers.getDefaultProvider(
    process.env.REACT_APP_LINK
  );
  //address provider de wagmi
  const { address } = useAccount();

  //mi cuenta
  const recipient = "0xe2Ee704E662F320Ae75f92E1585c779bF1244554";

  // send transaction function
  const { sendTransaction } = useSendTransaction({
    request: {
      from: address,
      to: recipient,
      value:
        ethers.utils.parseEther(calcTotal(totalQtty())?.toString()) || null,
    },
    onSuccess: () => mostrarAlert(),
    onError: () => mostrarAlertError(),
  });

  return (
    <div className="cartTittle">
      <Container className="containerProds">
        {CartItem.length == 0 ? (
          <div className="vacio">
            <h2>Tu carrito esta vacio</h2>
            <Link to={"../Productos"}>Ir a productos</Link>
          </div>
        ) : (
          <>
            {CartItem.map((item) => (
              <div className="item-products" key={item}>
                <h4>{item.tittle}</h4>
                <img src={item.desc} alt="" className="cart-Item-Image" />
                <br></br>

                <button
                  className="btnA"
                  onClick={() =>
                    createProduct(
                      item.id,
                      item.tittle,
                      item.price,
                      item.cover,
                      item.category,
                      item.stock,
                      item.desc
                    )
                  }
                >
                  +
                </button>
                <button
                  className="btnN"
                  onClick={() =>
                    decreaseProduct(
                      item.id,
                      item.tittle,
                      item.price,
                      item.cover,
                      item.category,
                      item.stock,
                      item.desc
                    )
                  }
                >
                  -
                </button>
                <h3 className="contador">{item.qty}</h3>

                <button className="eliminar" onClick={() => deleteQty(item.id)}>
                  eliminar producto
                </button>
              </div>
            ))}
            <div className="buy-div">
              <h4>
                total: <FaEthereum />
                {calcTotal(totalQtty).toFixed(2)}
              </h4>
              <br />

              <button className="btn-buy" onClick={sendTransaction}>
                comprar
              </button>
            </div>
          </>
        )}
      </Container>
    </div>
  );
};

export default Cart;
