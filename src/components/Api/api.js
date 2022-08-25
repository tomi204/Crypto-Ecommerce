import { DB } from "./Firebase";
import { collection, Firestore, getDocs, getDoc } from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
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
  // [END firestore_data_get_all_documents]
  return (
    <div className="App">
      {blogs &&
        blogs.map((blog) => {
          return (
            <div className="div-product" key={blog.id}>
              <div className="box-items">
                <img src={blog.cover} alt="" className="img-products" />
                <h2>{blog.tittle}</h2>
                <h4>${blog.desc}</h4>
                <h4>${blog.price}</h4>
                <Link to={`/category/${blog.id}`}>
                  <button className="boton-detalles">Ver Detalles</button>
                </Link>
              </div>
            </div>
          );
        })}
    </div>
  );
}

// export function getAll() {
//   useEffect(() => {

//     getDocs(colRef).then((snapshot) => {
//       console.log(">> snapshot.docs");

//       const products = snapshot.docs.map((rawDoc) => {
//         return {
//           id: rawDoc.id,
//           ...rawDoc.data(),
//         };
//       });
//     });
//   });
// }