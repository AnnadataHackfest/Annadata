import axios from 'axios';
import { GET_SOIL, SOIL_LOADING } from './types';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

export const getSoil = (lat, lng) => (dispatch, getState) => {
  dispatch(setItemsLoading);
  console.log(lat);
  axios
    .get('/api/ambeedata/soil', lat, lng, tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: GET_SOIL,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const setItemsLoading = () => {
  return {
    type: SOIL_LOADING,
  };
};
