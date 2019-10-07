import React, { Component } from "react";
import "./Header.css";
class Header extends Component {
  state = {
    val: ""
  };
  clickText = e => {
    this.setState({
      val: e.target.value
    });
  };
  add = e => {
    const { val } = this.state;
    if (e.keyCode === 13) {
      this.props.add(val);
      this.setState({
        val: ""
      });
    }
  };

  render() {
    const { changeAll } = this.props;
    const { val } = this.state;
    return (
      <div>
        <div className="header">
          <div className="title">
            <i
              className="fa fa-angle-down"
              onClick={changeAll}
              style={{ cursor: "pointer" }}
            />
            <input
              type="text"
              value={val}
              className="new-todo"
              onChange={e => this.clickText(e)}
              onKeyDown={e => this.add(e)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
