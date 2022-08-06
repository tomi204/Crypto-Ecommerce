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
import Contador from "./components/Cart-items/Cart";
import Cart from "./components/Cart-items/Cart";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <NavL />

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
