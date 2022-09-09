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
import { DataProvider } from "./components/context";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <DataProvider>
          <Navbar />
          <NavL />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/Productos" element={<Productos />} />
            <Route path="/category/:id" element={<ProductDetails />} />
          </Routes>
        </DataProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
