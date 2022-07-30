import React from "react";
import Contador from "../../common/cart-items/Cart";
import "./Home.css";
import SlideCard from "./ItemList";
function Home() {
  return (
    <section className="home">
      <Contador />
      <SlideCard />
    </section>
  );
}

export default Home;
