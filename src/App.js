import "./App.css";
import Home from "./components/Home/Home";
import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Header/Navbar";
import NavL from "./components/Lateralnav/NavL";
import Productos from "./components/Productos/Productos";
import Cart from "./components/CartItems/Cart";
import ProductDetails from "./components/Productos/ProductDetails";
import CartContextProvider from "./components/CartItems/CartContext";
import { getFirestore, collection, getDocs } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmxCV8XAUCNRwY0bDJpKdN9zRUmtMTyBw",
  authDomain: "proyectoreactch-29d90.firebaseapp.com",
  databaseURL: "https://proyectoreactch-29d90-default-rtdb.firebaseio.com",
  projectId: "proyectoreactch-29d90",
  storageBucket: "proyectoreactch-29d90.appspot.com",
  messagingSenderId: "946188183402",
  appId: "1:946188183402:web:466093a53c63b64c60e713",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase
// export const DB = getFirestore(app);

function App() {
  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    const DB = getFirestore(app);
    const colRef = collection(DB, "products");

    getDocs(colRef).then(
      (snapshot) => {
        console.log(">> snapshot.docs", snapshot.docs);
      },
      (error) => {
        console.log("error");
      }
    );
  });
  return (
    <div className="App">
      <BrowserRouter>
        <CartContextProvider>
          <Navbar />
          <NavL />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/Productos" element={<Productos />} />
            <Route path="/category/:id" element={<ProductDetails />} />
          </Routes>{" "}
        </CartContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
