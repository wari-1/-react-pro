import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./main.css";
import Home from "../Home/Home";
import Tree from "../Tree/Tree";
import ProjectIndex from "../ProjectIndex/ProjectIndex";

class Main extends Component {
  render() {
    return (
      <div className="main">
        {/* 路由信息 */}
        <Route path="/" exact component={Home} />
        <Route path="/index" exact component={Home} />
        <Route path="/pindex" exact component={Home} />
        <Route path="/projectindex" component={ProjectIndex} />
        <Route path="/tree" component={Tree} />
      </div>
    );
  }
}
export default Main;
