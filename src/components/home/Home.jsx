import React from "react";
import NavL from "../LateralNav/NavL";
import "./Home.css";
import SlideCard from "./ItemList";
function Home() {
  return (
    <section className="home">
      <SlideCard />
      <NavL />
    </section>
  );
}

export default Home;
