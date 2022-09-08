import { DB } from "./Firebase";
import { collection, Firestore, getDocs, getDoc } from "firebase/firestore";
import { useContext, useEffect } from "react";
import { useState } from "react";
import "./api.css";
import { DataContext } from "../context";

export function GetAll() {
  const { blogs, setBlogs } = useContext(DataContext);
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
  console.log("hola diego", blogs);
  return blogs;
}
