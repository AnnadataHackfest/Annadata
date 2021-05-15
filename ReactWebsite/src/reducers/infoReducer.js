import {
  GET_INFOS,
  ADD_INFO,
  DELETE_INFO,
  INFOS_LOADING,
} from '../actions/types';

const initialState = {
  infos: [],
  loading: false,
};

export default function infoReducer(state = initialState, action) {
  switch (action.type) {
    case GET_INFOS:
      return {
        ...state,
        infos: action.payload,
        loading: false,
      };
    case DELETE_INFO:
      return {
        ...state,
        infos: state.items.filter((item) => item._id !== action.payload),
      };
    case ADD_INFO:
      return {
        ...state,
        infos: [action.payload, ...state.infos],
      };
    case INFOS_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
