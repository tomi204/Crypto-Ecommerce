import "./App.css";
import Home from "./components/home/Home";
import Header from "./common/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <Router>
      <div className="App">
        {/* <div className={darkMode ? "dark-mode" : "light-mode"}>
          <div className="container">
            <span style={{ color: darkMode ? "white" : "yellow" }}>☀︎</span>
            <div className="switch-checkbox"></div>
            <label className="switch">
              <input
                className="box"
                type="checkbox"
                onChange={() => setDarkMode(!darkMode)}
              />

              <span className="slider round"></span>
            </label>
            <span
              className="luna"
              style={{ color: darkMode ? "#c96dfd" : "grey" }}
            >
              ☽
            </span>
          </div>
        </div> */}
        <Header />
        <Home />
      </div>
    </Router>
  );
}

export default App;
