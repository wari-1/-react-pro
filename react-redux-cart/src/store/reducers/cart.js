import { GET_CART, ADD_CART, SUB } from "../actionTypes";
export default (state = null, action) => {
  switch (action.type) {
    case GET_CART:
      return action.cart;
    case ADD_CART:
      return action.newCart;
    case SUB:
      return action.newCart1;
    default:
      return state; // 组件 => actions => reduces
  }
};
