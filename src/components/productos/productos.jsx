import React from "react";
import "./productosC.css";
import { GetAll } from "../Api/api";
import { Link } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import { useContext } from "react";
import { DataContext } from "../context";
export default function Productos() {
  // datacontext from context and get data from api
  const productosA = GetAll();
  const { blogs, setBlogs, addToCart } = useContext(DataContext);
  // render products and link to product details
  function createProduct(id, tittle, cover, desc, price, stock) {
    let product = {
      id,
      tittle,
      cover,
      desc,
      price,
      stock
    }
    addToCart(product)

  }
  return (
    <section className="section-products">


      {blogs &&
        blogs.map((item) => {
          return (
            <div className="div-product" key={item.id} >
              <img src={item.cover} alt="" className="img-products" />
              <h2>{item.tittle}</h2>
              <h4 className="precio">${item.price}</h4>
              <button className="addC-P" onClick={() => createProduct(item.id, item.tittle, item.price, item.cover, item.stock, item.desc)}> + </button>
              <Link to={`/category/${item.id}`} className="link-detalles">
                <button className="boton-detalles">Ver Detalles</button>
              </Link>

            </div>
          );
        })}



    </section>

  )
};


