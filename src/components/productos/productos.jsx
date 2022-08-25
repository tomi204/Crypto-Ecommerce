import React from "react";
import "./productosC.css";
//import { useEffect } from "react";
import { Link } from "react-router-dom";
//import { DB } from "../Api/Firebase";
export default function Productos() {


  // {
  //   products.map(value, index) => (){

  //   }

  return (
    <section className="section-products">
      <div className="product-d">

        return (
        <div className="div-product" key={index}>
          <div className="box-items">
            <img src={value.cover} alt="" className="img-products" />
            <h2>{value.title}</h2>

            <h4>${Data.price}</h4>
            <Link to={`/category/${value.id}`}>
              <button className="boton-detalles">Ver Detalles</button>
            </Link>

          </div>
        </div>
        );

      </div>
    </section>
  );
}

