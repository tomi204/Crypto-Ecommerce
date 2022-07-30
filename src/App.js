import "./App.css";
import Home from "./components/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./common/header/Navbar";
import NavL from "./components/lateralnav/NavL";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Home />
        <NavL />
      </div>
    </Router>
  );
}

export default App;
