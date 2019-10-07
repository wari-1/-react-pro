import React, { Component } from "react";
import { Route } from "react-router-dom";
import './Main.css'
import Home from "../Home/Home";
import Projectindex from "../Projectindex/Projectindex";
import Tree from "../Tree/Tree";
class Main extends Component {
  state = {};
  render() {
    return (
      <div className="main">
        <Route path="/" component={Home} exact />
        <Route path="/projectindex" component={Projectindex} />
        <Route path="/tree" component={Tree} />
      </div>
    );
  }
}

export default Main;
