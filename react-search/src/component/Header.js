import React, { Component } from "react";
class Header extends Component {
  state = {};

  render() {
    const { val, handleInput, checked } = this.props;
    return (
      <div>
        <input
          type="text"
          value={val}
          onChange={e => handleInput(e, "val")}
          placeholder="Search..."
        />
        <div className="checkbox">
          <input
            type="checkbox"
            id="xxx"
            checked={checked}
            onChange={e => handleInput(e, "checked")}
          />
          <label htmlFor="xxx">Only show products in stock</label>
        </div>
      </div>
    );
  }
}

export default Header;
