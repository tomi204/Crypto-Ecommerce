import "./App.css";
import Home from "./components/home/Home";
import Header from "./common/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header CartItem={CartItem} />
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <Home />
      </div>
    </Router>
  );
}

export default App;
