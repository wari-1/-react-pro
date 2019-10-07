import React from "react";
import ProductList from "./ProductsList";
import { connect } from "react-redux";
import { getProducts } from "../store/actions";
const ProductListContainer = props => {
  return (
    <div>
      <ProductList {...props} />
    </div>
  );
};
const mapStateToProps = state => {
  return {
    products: state.products,
    cart: state.cart
  };
};

export default connect(
  mapStateToProps,
  { getProducts }
)(ProductListContainer);
