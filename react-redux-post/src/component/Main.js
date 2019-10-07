import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import Post from "./Post";
class Main extends Component {
  
  render() {
    return (
      <>
        <Route path="/" component={Home} exact/>
        <Route path="/post" component={Post} />
      </>
    );
  }
}
// 语法糖只对布局有影响
export default Main;
