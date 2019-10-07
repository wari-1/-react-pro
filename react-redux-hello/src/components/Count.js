import React, { Component } from "react";
import store from "../store";
class Count extends Component {
  render() {
    // 如何获取 store 内的数据
    const { count } = this.props;
    console.log(this.props);
    return (
      <div>
        <h2>组件1</h2>
        <button onClick={() => store.dispatch({ type: "SUB" })}>-</button>
        <span>{count}</span>
        <button onClick={() => store.dispatch({ type: "ADD" })}>+</button>
      </div>
    );
  }
}
export default Count;
