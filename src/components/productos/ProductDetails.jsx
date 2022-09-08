import React from "react";
import "./productosC.css";
import { Link } from "react-router-dom";
import Contador from "../CartItems/Contador";
import { DB } from "../Api/Firebase";
import { useState, useEffect } from "react";
import { collection, getDocs, getDoc, query, where } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { GetAll } from "../Api/api";
const ProductDetails = (props) => {
  const productsId = GetAll();
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const productId = productsId.find((product) => product.id === id);
  useEffect(() => {
    setTimeout(() => {
      if (productsId) {
        setProduct(productId);
      }
    }, 2000[product])
  });
  console.log("hola", product);
  {
    productsId || productsId.map((product) => {

      const hola = product.id === id
      return (<div>{hola.tittle}</div>)
    })
  }
}

// return (
//   <div className="productos" >
//     {productId && productId.map((blog) => {
//       <div className="list-item" key={blog.id}>
//         <h1>{blog.title}</h1>
//         <h3>{blog.desc}</h3>
//         <img src={blog.cover} alt="" className="img-details" />
//         <h2> ${blog.price}</h2>
//         <h2>Hay {blog.stock} en stock</h2>
//         <h2> ${blog.price}</h2>

//         {/* // {goToCart ? */}
//         <Link to={"/Cart"}>Terminar la compra</Link>
//         {/* //  :
//          //   <Contador onAdd={onAdd} /> */}

//         {/* } */}
//       </div>
//     })}</div>
// )


export default ProductDetails;
