import React from "react";
import "./productosC.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Contador from "../CartItems/Contador";
import { useState } from "react";
import { useEffect } from "react";
import { collection, getDocs, getDoc } from "firebase/firestore";
import { DB } from "../Api/Firebase";

const ProductDetails = () => {
  //const { id } = useParams();
  const [blogs, setBlogs] = useState([]);
  const fetchBlogs = () => {
    const response = collection(DB, "products");
    const data = getDocs(response);
    data.then((res) =>
      setBlogs(res.docs.map((prod) => ({ id: prod.id, ...prod.data() })))
    );
  };
  useEffect(() => {
    fetchBlogs();
  }, []);
  return (
    <div>
      {blogs.map((blog, id) => {
        return (
          <div className="productos" key={id}>

            <div className="list-item">
              <h1>{blog.title}</h1>
              <h3>{blog.desc}</h3>
              <img src={blog.cover} alt="" className="img-details" />
              <h2> ${blog.price}</h2>
              <h2>Hay {blog.stock} en stock</h2>
              <h2> ${blog.price}</h2>

              {/* // {goToCart ? */}
              <Link to={"/Cart"}>Terminar la compra</Link>
              {/* //  :
           //   <Contador onAdd={onAdd} /> */}

              {/* } */}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductDetails;
