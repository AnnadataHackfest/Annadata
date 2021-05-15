import { GET_SOIL, SOIL_LOADING } from '../actions/types';

const initialState = {
  soil: {},
  loading: false,
};

export default function soilReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SOIL:
      return {
        ...state,
        soil: action.payload,
        loading: false,
      };
    case SOIL_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
