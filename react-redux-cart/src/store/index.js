import { createStore, applyMiddleware, combineReducers } from "redux";
import { logger } from "redux-logger";
import thunk from "redux-thunk";
import products from "./reducers/products";
import cart from "./reducers/cart";
const rootReduces = combineReducers({
  products,
  cart
});
export default createStore(rootReduces, applyMiddleware(logger, thunk));
