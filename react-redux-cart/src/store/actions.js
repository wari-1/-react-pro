import { GET_CART, GET_PRODUCTS, ADD_CART, SUB } from "./actionTypes";
import axios from "axios";
const getProducts = () => dispatch => {
  axios.get("http://localhost:3008/products").then(res => {
    dispatch({
      type: GET_PRODUCTS,
      products: res.data
    });
  });
};
const getCart = () => dispatch => {
  axios.get("http://localhost:3008/cart").then(res => {
    dispatch({
      type: GET_CART,
      cart: res.data
    });
  });
};
const addCart = (productId, cart) => dispatch => {
  if (!cart.productsIdsInCart.find(item => item === productId)) {
    axios
      .post("http://localhost:3008/cart", {
        productsIdsInCart: [...cart.productsIdsInCart, productId],
        quantityById: {
          ...cart.quantityById,
          [productId]: 1
        }
      })
      .then(res => {
        dispatch({
          type: ADD_CART,
          newCart: res.data
        });
      });
  } else {
    axios
      .patch("http://localhost:3008/cart", {
        quantityById: {
          ...cart.quantityById,
          [productId]: cart.quantityById[productId] + 1
        }
      })
      .then(res => {
        dispatch({
          type: ADD_CART,
          newCart: res.data
        });
      });
  }
};
const sub = (productId, cart) => dispatch => {
  if (cart.quantityById[productId] > 1) {
    axios
      .patch("http://localhost:3008/cart", {
        quantityById: {
          ...cart.quantityById,
          [productId]: cart.quantityById[productId] - 1
        }
      })
      .then(res => {
        dispatch({
          type: SUB,
          newCart1: res.data
        });
      });
  } else {
    const obj = { ...cart.quantityById };
    delete obj[productId];
    axios
      .patch("http://localhost:3008/cart", {
        productsIdsInCart: cart.productsIdsInCart.filter(
          item => item !== productId
        ),
        quantityById: obj
      })
      .then(res => {
        dispatch({
          type: SUB,
          newCart1: res.data
        });
      });
  }
};

export { getCart, getProducts, addCart, sub };
