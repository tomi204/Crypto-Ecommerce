import React from "react";
import { DB } from "../Api/Firebase";
import "./productosC.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Contador from "../CartItems/Contador";
import { useState } from "react";
import { useEffect } from "react";
const ProductDetails = () => {
  const [goToCart, setCart] = useState(false);
  let { id } = useParams();
  const [data, setData] = useState();
  const { prodId } = useParams();

  useEffect(() => {
    const dbDoc = doc(DB, 'ProductList', prodId);
    getDoc(dbDoc)
      .then(res => setData({ id: res.id, ...res.data() }))
      .catch(err => console.log(err))
      .finally(console.log())

  }, [prodId]);

  const onAdd = () => {
    setCart(true);;
  }


  return (
    <div>
      <div className="list-item">
        <h1>{data.title}</h1>
        <h3>{data.desc}</h3>
        <img src={data.cover} alt="" className="img-details" />
        <h2> ${data.price}</h2>
        <h2>Hay {data.stock} en stock</h2>

        {goToCart ?
          <Link to={"/Cart"}>Terminar la compra</Link>
          :
          <Contador onAdd={onAdd} />

        }
      </div>
    </div>
  );


}

export default ProductDetails;
