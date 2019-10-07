import React from "react";
import "./index";
import { HashRouter as Router, Link } from "react-router-dom";
import Main from "./component/Main";
function App() {
  return (
    <div className="App">
      <Router>
        <ul>
          <li>
            <Link to="/">home</Link>
            <Link to="/about">about</Link>
          </li>
          <li />
        </ul>
        <Main />
      </Router>
    </div>
  );
}

export default App;
