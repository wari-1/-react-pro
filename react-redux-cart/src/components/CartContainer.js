import React from "react";
import { connect } from "react-redux";
import CartList from "./CartList";
import {getCart} from '../store/actions'
const CartContainer = props => {
  return (
    <div>
      <CartList {...props} />
    </div>
  );
};
const mapStateToProps = state => {
  return {
    cart: state.cart,
    products: state.products
  };
};

export default connect(mapStateToProps,{getCart})(CartContainer);
