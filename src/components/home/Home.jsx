import React from "react";
import NavL from "../Lateralnav/NavL";
import "./Home.css";
import SlideCard from "./ItemList";
// home component with slidecard and lateralnav
function Home() {
  return (
    <section className="home">
      <SlideCard />
      <NavL />
    </section>
  );
}

export default Home;
