import React from "react";
import "./App.css";
import "./index.css";
import AppRouter from "./component/Main";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import Header from "./component/Header";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <nav>
          <ul>
            <li>
              <NavLink to="/" exact activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/newabout" activeClassName="active">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/topics" activeClassName="active">
                Topics
              </NavLink>
            </li>
          </ul>
        </nav>
        <AppRouter />
      </Router>
    </div>
  );
}

export default App;
