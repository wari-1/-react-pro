import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import "./Header.scss";
class Header extends Component {
  state = {};
  render() {
    return (
      <header>
        <div>
          <img
            src="https://www.vue-js.com/public/images/vue.png"
            alt=""
            onClick={() => this.props.history.push("/")}
          />
          <input type="text" />
          <Button1>登录</Button1>
        </div>
      </header>
    );
  }
}
const Button1 = styled.button`
  color: red;
  :hover {
    color: teal;
  }
`;
export default withRouter(Header);
