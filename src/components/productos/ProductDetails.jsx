import React from "react";
import "./productosC.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { GetAll } from "../Api/api";
import { useContext } from "react";
import { DataContext } from "../context";
const ProductDetails = () => {
  // datacontext from context and get data from api
  const { blogs, setBlogs, addToCart, decreaseQty, CartItem } =
    useContext(DataContext);
  const { id } = useParams();
  // const productsId = GetAll();
  function createProduct(id, tittle, cover, desc, price, stock, category) {
    let product = {
      id,
      tittle,
      cover,
      desc,
      price,
      stock,
      category,
    };
    addToCart(product);
  }
  function decreaseProduct(id, tittle, cover, desc, price, stock, category) {
    let product = {
      id,
      tittle,
      cover,
      desc,
      price,
      stock,
      category,
    };
    decreaseQty(product);
  }

  return (
    <div className="productos">
      {blogs &&
        blogs
          .filter((item) => item.id === Number(id))
          .map((item) => {
            return (
              <div className="list-item" key={item.id}>
                <br></br>
                <img src={item.cover} alt="" className="img-details" />
                <h1>{item.title}</h1>
                <h3 className="desc-id">{item.desc}</h3>
                <br></br>
                <h2> ${item.price} ether</h2>
                <h2>Hay {item.stock} en stock</h2>
                <br />
                <button
                  className="addCart-D"
                  onClick={() =>
                    createProduct(
                      item.id,
                      item.tittle,
                      item.price,
                      item.cover,
                      item.stock,
                      item.desc,
                      item.category
                    )
                  }
                >
                  +
                </button>
                <button
                  className="btn-e"
                  onClick={() =>
                    decreaseProduct(
                      item.id,
                      item.tittle,
                      item.price,
                      item.cover,
                      item.category,
                      item.stock,
                      item.desc
                    )
                  }
                >
                  -
                </button>

                {/* // {goToCart ? */}
                <Link to={"/Cart"} className="link-cart">
                  Ir al carrito
                </Link>
              </div>
            );
          })}
    </div>
  );
};

export default ProductDetails;
