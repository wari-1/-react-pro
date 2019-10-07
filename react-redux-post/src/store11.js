import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

const initialState = {
  posts: [],
  comments: [],
  post: null
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
const store = createStore(rootReducer, applyMiddleware(logger));
export default store;
