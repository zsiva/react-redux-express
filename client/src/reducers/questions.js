import {
  GET_CONTENT,
  ITEMS_LOADING,
  HAS_ERRORS
} from '../actions/questions';

const questionsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_CONTENT:
      return {...state, content: action.content}
    case ITEMS_LOADING:
      return {...state, isLoading: action.isLoading}
    case HAS_ERRORS:
      return {...state, hasErrors: action.hasErrors}
    default:
      return state;
  }
};

export default questionsReducer;
