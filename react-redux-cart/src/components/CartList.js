import React, { Component } from "react";
import { getCart, getProducts, addCart, sub } from "../store/actions";
import { connect } from "react-redux";
import { newProducts, total } from "../store/selectors";
class CartList extends Component {
  componentDidMount() {
    this.props.getCart();
    this.props.getProducts();
  }
  render() {
    const { cart, products } = this.props;
    const content = cart ? (
      <ul>
        {newProducts(cart, products).map(item => (
          <li key={item.id} style={{ display: "flex" }}>
            <span>{item.name}</span>
            <span style={{ marginLeft: 10 }}>{item.price}</span>
            <button
              onClick={() => this.props.sub(item.id, cart)}
              disabled={item.num <= 0}
            >
              -
            </button>
            <span>{item.num}</span>
            <button
              onClick={() => this.props.addCart(item.id, cart)}
              disabled={
                item.num >= products.find(ele => ele.id === item.id).inventory
              }
            >
              +
            </button>
          </li>
        ))}
      </ul>
    ) : (
      "请添加商品"
    );
    return (
      <div>
        <span>总价：{total(cart, products)}</span>
        {content}
      </div>
    );
  }
}

export default connect(
  null,
  { getCart, getProducts, addCart, sub }
)(CartList);
