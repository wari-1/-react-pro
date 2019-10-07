import React from "react";
import "./index";
import {BrowserRouter as Router} from 'react-router-dom'
import Header from "./component/Header/Header";
import Main from "./component/Main/Main";

function App() {
  return (
    <Router className="App">
      <Header />
      <Main/>
    </Router>
  );
}

export default App;
