import React, { useContext } from "react";
import "./Cart.css";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { DataContext } from "../context";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const Cart = () => {
  // data context from context
  const { CartItem, setCartItem, addToCart, decreaseQty, deleteQty, count, setCount, calcTotal, totalQtty } = useContext(DataContext);
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

  const order = {
    buyer: {
      name: "Juan",
      phone: "221456789",
      email: "juandoscuatro@gmail.com",
      addres: "Calle falsa 123"
    }, items: CartItem.map(product => ({ id: product.id, title: product.tittle, price: product.cover, quantity: product.qty, })),
    total: calcTotal()
  }
  function createOrder() {
    const db = getFirestore();
    const orders = collection(db, "orders");
    addDoc(orders, order).then(({ id }) => alert("Tu se te mandara un mail para que termines tu compra " + (id)))

  }


  return (

    <div className="cartTittle" >

      <Container className="containerProds">
        {
          CartItem.length === 0 ?
            <div className="vacio">
              <h2>Tu carrito esta vacio</h2>
              <Link to={"../Productos"}>Ir a productos</Link>
            </div>
            :
            <>
              {CartItem.map((item) => (
                <div className="item-products" key={item}>
                  <h3>{item.tittle}</h3>
                  <img src={item.desc} alt="" className="cart-Item-Image" />
                  <br></br>
                  <button className="btnA" onClick={() => createProduct(item.id, item.tittle, item.price, item.cover, item.category, item.stock, item.desc)}>+</button>
                  <button className="btnN" onClick={() => decreaseProduct(item.id, item.tittle, item.price, item.cover, item.category, item.stock, item.desc)}>-</button>
                  <h2 className="contador">{item.qty}</h2>
                  <h2>${item.qty * item.cover}</h2>
                  <button className="eliminar" onClick={() => deleteQty(item.id)}>eliminar producto</button>
                  <h1>Terminar compra</h1>

                </div>

              ))}<h3>Precio total:${calcTotal()}</h3>

              <form action="submit">
                <label>Nombre y Apellido</label>
                <input type='text' placeholder='Nombre y apellido' />

                <label>Email</label>
                <input type='email' name='mail' placeholder='Email' />

                <label>Direccion</label>
                <input type='text' placeholder='Direccion' />
                <button onClick={createOrder}>Emitir compra</button>
              </form>
            </>

        }

      </Container>

    </div >
  );
};

export default Cart;