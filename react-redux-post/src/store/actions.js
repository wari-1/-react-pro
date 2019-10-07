import {
  GET_COMMENTS,
  GET_POST,
  GET_POSTS,
  DEL_COMMENT,
  ADD_COMMENT
} from "./actionTypes";
import axios from "axios";
const getPosts = () => {
  return dispatch => {
    axios.get("http://localhost:3008/posts").then(res => {
      dispatch({
        type: GET_POSTS,
        posts: res.data
      });
    });
  };
};
const getPost = id => {
  return dispatch => {
    axios.get(`http://localhost:3008/posts/${id}`).then(res => {
      dispatch({
        type: GET_POST,
        post: res.data
      });
    });
  };
};
const getComments = postId => {
  return dispatch => {
    axios.get(`http://localhost:3008/comments?postId=${postId}`).then(res => {
      dispatch({
        type: GET_COMMENTS,
        comments: res.data.reverse()
      });
    });
  };
};
const addComment = (newComment, clear) => {
  return dispatch => {
    axios.post(`http://localhost:3008/comments`, newComment).then(res => {
      dispatch({
        type: ADD_COMMENT,
        newComment: res.data
      });
      clear();
    });
  };
};
const delComment = id => {
  return dispatch => {
    axios.delete(`http://localhost:3008/comments/${id}`).then(res => {
      dispatch({
        type: DEL_COMMENT,
        id
      });
    });
  };
};

export { getPost, getPosts, getComments, addComment, delComment };
