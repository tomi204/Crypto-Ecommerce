import React from "react";
import "./productosC.css";
import { GetAll } from "../Api/api";
export default function Productos() {

  return (

    <section className="section-products">
      <div className="product-d">
        <GetAll />
      </div>
    </section>
  );
}

