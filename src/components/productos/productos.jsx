import React from "react";
import "./productosC.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { DB } from "../Api/Firebase";
export default function Productos({ name, img, price, id }) {
  const { categoryId } = useParams()
  const [data, setData] = useState();

  // useEffect(() => {

  //   const colRef = collection(DB, "Products");
  //   console.log(colRef)

  //   if (categoryId) {
  //     const colFilterRef = query(colRef,
  //       where('cat', '==', categoryId))
  //     getDocs(colRef)
  //       .then(res => setData(res.docs.map(prod => ({ id: prod.id, ...prod.data() })))
  //       )
  //     getDocs(colFilterRef)
  //       .then(res => setData(res.docs.map(prod => ({ id: prod.id, ...prod.data() })))
  //       )
  //   } else {
  //     getDocs(colRef)
  //       .then(res => setData(res.docs.map(prod => ({ id: prod.id, ...prod.data() })))
  //       )
  //   };

  // }, [categoryId]);
  //return (
  // <section className="section-products">
  //   <div className="product-d">

  //     return (
  //     <div className="div-product" key={index}>
  //       <div className="box-items">
  //         <img src={data.cover} alt="" className="img-products" />
  //         <h2>{data.title}</h2>

  //         <h4>${price}</h4>
  //         <Link to={`/category/${data.id}`}>
  //           <button className="boton-detalles">Ver Detalles</button>
  //         </Link>

  //       </div>
  //     </div>
  //     );

  //   </div>
  // </section>
  //);
}
