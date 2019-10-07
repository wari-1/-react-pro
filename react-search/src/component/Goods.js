import React, { Component } from "react";
class Goods extends Component {
  state = {};
  render() {
    const { name, price } = this.props;

    return (
      <div>
        <ul>
          <div className="box">
            <span>{name}</span>
            <span>{price}</span>
          </div>
        </ul>
      </div>
    );
  }
}

export default Goods;
