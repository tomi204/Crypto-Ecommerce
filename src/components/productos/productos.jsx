import React from "react";
import "./productosC.css";
import { GetAll } from "../Api/api";
import { Link } from "react-router-dom";
import ProductDetails from "./ProductDetails";
export default function Productos() {
  const productosA = GetAll();
  return (
    <section className="section-products">
      <div className="product-d">

        {productosA &&
          productosA.map((blog) => {
            return (
              <div className="div-product" key={blog.id}>
                <div className="box-items">
                  <img src={blog.cover} alt="" className="img-products" />
                  <h2>{blog.tittle}</h2>
                  <br></br>
                  <h4 className="precio">${blog.price}</h4>
                  <Link to={`/category/${blog.id}`}>
                    <ProductDetails props={blog} />
                    <button className="boton-detalles">Ver Detalles</button>
                  </Link>
                </div>
              </div>
            );
          })}
      </div>
      ;

    </section>

  )
};


