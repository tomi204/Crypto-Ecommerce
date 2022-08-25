import React from "react";
import "./productosC.css";
//import { useEffect } from "react";
import { Link } from "react-router-dom";
import { GetAll } from "../Api/api";
//import { DB } from "../Api/Firebase";
export default function Productos() {


  // {
  //   products.map(value, index) => (){

  //   }

  return (

    <section className="section-products">
      <div className="product-d">
        <GetAll />
      </div>
    </section>
  );
}

