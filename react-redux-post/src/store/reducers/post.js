import { GET_POST } from '../actionTypes'
export default (state = null, action) => {
  switch(action.type){
    case GET_POST:
      return action.post
    default :
    return state
  }
};