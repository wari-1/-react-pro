import React, { Component } from "react";
import store from "../store";
import { connect } from "react-redux";
class CountCopy extends Component {
  render() {
    const { count } = this.props;
    return (
      <div>
        <h2>组件2</h2>
        <button onClick={() => store.dispatch({ type: "SUB" })}>-</button>
        <span>{count}</span>
        <button onClick={() => store.dispatch({ type: "ADD" })}>+</button>
        <button
          onClick={() =>
            store.dispatch({
              type: "CHANGE",
              newCount: Math.floor(Math.random() * 200)
            })
          }
        >
          随意改
        </button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    count: state.count
  };
};
export default connect(mapStateToProps)(CountCopy);
