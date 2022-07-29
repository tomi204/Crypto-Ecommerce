import "./App.css";
import Home from "./components/home/Home";
import Header from "./common/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Home />
        <container texto={"hola"} />
      </div>
    </Router>
  );
}

export default App;
