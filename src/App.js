import "./App.css";
import Home from "./components/Home/Home";
import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import NavL from "./components/Lateralnav/NavL";
import Productos from "./components/Productos/Productos";
import Cart from "./components/CartItems/Cart";
import ProductDetails from "./components/Productos/ProductDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <NavL />

        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Cart />} path="/cart" />
          <Route element={<Productos />} path="/Productos" />
          <Route element={<ProductDetails />} path="/category/:id" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
