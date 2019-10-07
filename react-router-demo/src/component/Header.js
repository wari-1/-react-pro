import React, { Component } from "react";
import { withRouter } from "react-router-dom";
class Header extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1 onClick={() => this.props.history.push("/")}>首页</h1>
        <span onClick={() => this.props.history.goBack()}>返回</span>
      </div>
    );
  }
}

export default withRouter(Header);
