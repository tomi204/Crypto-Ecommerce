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
  const { blogs, setBlogs } = useContext(DataContext);
  // render products and link to product details
  return (
    <section className="section-products">


      {blogs &&
        blogs.map((blog) => {
          return (
            <div className="div-product" >

              <img src={blog.cover} alt="" className="img-products" />
              <h2>{blog.tittle}</h2>
              <br></br>
              <h4 className="precio">${blog.price}</h4>
              <Link to={`/category/${blog.id}`}>
                <button className="boton-detalles">Ver Detalles</button>
              </Link>

            </div>
          );
        })}



    </section>

  )
};


