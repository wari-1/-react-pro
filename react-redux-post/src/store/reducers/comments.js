import { GET_COMMENTS, DEL_COMMENT, ADD_COMMENT } from "../actionTypes";
export default (state = [], action) => {
  switch (action.type) {
    case GET_COMMENTS:
      return action.comments;
    case ADD_COMMENT:
      return [action.newComment, ...state];
    case DEL_COMMENT:
      return state.filter(item => item.id !== action.id);
    default:
      return state;
  }
};
