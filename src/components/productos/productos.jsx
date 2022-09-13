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
  return (
    <section className="section-products">


      {blogs &&
        blogs.map((blog) => {
          return (
            <div className="div-product" key={blog.id} >
              <img src={blog.cover} alt="" className="img-products" />
              <h2>{blog.tittle}</h2>
              <h4 className="precio">${blog.price}</h4>
              <button className="addC-P" onClick={() => createProduct(blog.id, blog.tittle, blog.price, blog.cover, blog.category, blog.stock, blog.desc)}> + </button>
              <Link to={`/category/${blog.id}`} className="link-detalles">
                <button className="boton-detalles">Ver Detalles</button>
              </Link>

            </div>
          );
        })}



    </section>

  )
};


