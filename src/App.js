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
import CartProvider, { CartContext } from "./components/CartItems/CartContext";
import ProductDetails from "./components/Productos/ProductDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <Navbar />
          <NavL />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/Productos" element={<Productos />} />
            <Route path="/category/:id" element={<ProductDetails />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
