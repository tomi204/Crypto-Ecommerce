import React from "react";
import NavL from "../Lateralnav/NavL";
import "./Home.css";
import SlideCard from "./ItemList";
function Home() {
  return (
    <section className="home">
      <SlideCard />
      <NavL />
      <GetAll />
    </section>
  );
}

export default Home;
