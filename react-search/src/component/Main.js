import React, { Component } from "react";
import Category from "./Category";
import Goods from "./Goods";
class Main extends Component {
  state = {};
  render() {
    const { showProducts } = this.props;
    const content = showProducts.map(item => (
      <div key={item.category}>
        <Category category={item.category} />
        {item.list.map((ele, index) => (
          <Goods key={index} name={ele.name} price={ele.price} />
        ))}
      </div>
    ));

    return (
      <div>
        <div className="main">
          <div className="title">
            <span>Name</span>
            <span>Price</span>
          </div>
          {content}
        </div>
      </div>
    );
  }
}

export default Main;
