import React, { Component } from "react";
import { getProducts, addCart } from "../store/actions";
import { connect } from "react-redux";
import { newProducts } from "../store/selectors";
class ProductList extends Component {
  componentDidMount() {
    this.props.getProducts();
  }
  render() {
    const { products, cart } = this.props;
    console.log();
    const content =
      products.length && cart ? (
        <ul>
          {products.map(product => {
            console.log(cart.quantityById[product.id] >= product.inventory);
            return (
              <li key={product.id} style={{ display: "flex" }}>
                <span>{product.name}</span>
                <span style={{ marginLeft: 10 }}>{product.price}</span>
                <button
                  onClick={() => this.props.addCart(product.id, cart)}
                  disabled={
                    cart.quantityById[product.id] >= product.inventory
                      ? true
                      : false
                  }
                >
                  {cart.quantityById[product.id] >= product.inventory
                    ? "over the cart"
                    : "add to cart"}
                </button>
              </li>
            );
          })}
        </ul>
      ) : (
        <div>稍等</div>
      );
    return content;
  }
}

export default connect(
  null,
  { getProducts, addCart }
)(ProductList);
