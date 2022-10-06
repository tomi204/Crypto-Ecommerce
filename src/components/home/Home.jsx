import React from "react";
import NavL from "../Lateralnav/NavL";
import "./Home.css";
import SlideCard from "./ItemList";
import { Footer } from "./../footer/Footer";
// home component with slidecard, lateralnav && footer
function Home() {
  return (
    <section className="home">
      <SlideCard />
      <NavL />
      <Footer />
    </section>
  );
}

export default Home;
