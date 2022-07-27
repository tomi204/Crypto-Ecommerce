import "./App.css";
import Home from "./components/home/Home";
import Header from "./common/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import Cart from "./common/cart/Cart";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Home />
      </div>
    </Router>
  );
}

export default App;
