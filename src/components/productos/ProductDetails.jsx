import React from "react";
import "./productosC.css";
import { Link } from "react-router-dom";
import Contador from "../CartItems/Contador";
import { useParams } from "react-router-dom";
import { GetAll } from "../Api/api";
import { useContext } from "react";
import { DataContext } from "../context";
const ProductDetails = () => {
  // datacontext from context and get data from api 
  const { blogs, setBlogs, addToCart, decreaseQty, deleteQty, } = useContext(DataContext);
  // const productsId = GetAll();
  const { id } = useParams();

  return (
    <div className="productos" >
      {blogs && blogs.filter(item => item.id === Number(id)).map((blog) => {
        return (
          <div className="list-item" key={blog.id}>
            <br></br>
            <img src={blog.cover} alt="" className="img-details" />
            <h1>{blog.title}</h1>
            <h3 className="desc-id">{blog.desc}</h3>
            <br></br>
            <h2> ${blog.price}</h2>
            <h2>Hay {blog.stock} en stock</h2>
            <br />
            <button onClick={addToCart} className="btnAdd">+1</button>
            <button onClick={decreaseQty} className="btnAdd">-1</button>
            {/* // {goToCart ? */}
            <Link to={"/Cart"}>Ir al carrito</Link>
            {/* //  :
         //   <Contador onAdd={onAdd} /> */}

            {/* } */}
          </div>
        )

      })}</div>
  )
}

export default ProductDetails;
