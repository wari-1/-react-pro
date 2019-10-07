import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import post from "./reducers/post";
import posts from "./reducers/posts";
import comments from "./reducers/comments";
import thunk from "redux-thunk";
const rootReducer = combineReducers({
  posts,
  comments,
  post
});
const store = createStore(rootReducer, applyMiddleware(logger, thunk));
export default store;
