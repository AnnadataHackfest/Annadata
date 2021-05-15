import {
  GET_QUESTIONS,
  ADD_QUESTION,
  DELETE_QUESTION,
  QUESTIONS_LOADING,
} from '../actions/types';

const initialState = {
  questions: [],
  loading: false,
};

export default function questionReducer(state = initialState, action) {
  switch (action.type) {
    case GET_QUESTIONS:
      return {
        ...state,
        questions: action.payload,
        loading: false,
      };
    case DELETE_QUESTION:
      return {
        ...state,
        questions: state.items.filter((item) => item._id !== action.payload),
      };
    case ADD_QUESTION:
      return {
        ...state,
        questions: [action.payload, ...state.questions],
      };
    case QUESTIONS_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
