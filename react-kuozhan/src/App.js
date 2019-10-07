import React from "react";
import "./index";

import { BrowserRouter as Router, NavLink } from "react-router-dom";
import "./component/Home.css";
import Main from "./component/Main";
function App() {
  return (
    <div className="App">
      <Router>
        <ul>
          <li>
            <NavLink to="/" exact>
              home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">about</NavLink>
          </li>
        </ul>
        <Main />
      </Router>
    </div>
  );
}

export default App;
