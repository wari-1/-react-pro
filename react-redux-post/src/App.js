import React from "react";
import "./index";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./component/Main";
function App() {
  return (
    <div className="App">
      <Router>
        <Main />
      </Router>
    </div>
  );
}

export default App;
