import { DB } from "./Firebase";
import { collection, Firestore, getDocs, getDoc } from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";
import "./api.css";
import { Link } from "react-router-dom";
import ProductDetails from "../Productos/ProductDetails";
export function GetAll() {
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
  return blogs;
}
