import {
  GET_CONTENT
} from '../actions/questions';

const questionsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_CONTENT:
      return {...state, content: action.content}
    default:
      return state;
  }
};

export default questionsReducer;
