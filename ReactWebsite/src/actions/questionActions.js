import axios from 'axios';
import { GET_QUESTIONS, ADD_QUESTION, QUESTIONS_LOADING } from './types';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

export const getQuestions = () => (dispatch) => {
  dispatch(setItemsLoading);
  axios
    .get('/api/questions')
    .then((res) =>
      dispatch({
        type: GET_QUESTIONS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const addQuestion = (question) => (dispatch, getState) => {
  axios
    .post('/api/questions', question, tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: ADD_QUESTION,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// export const deleteItem = (id) => (dispatch, getState) => {
//   axios.delete(`/api/items/${id}`, tokenConfig(getState))
//    .then(res => dispatch({
//       type: DELETE_ITEM,
//       payload: id
//    })
//   )
//   .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
// };

export const setItemsLoading = () => {
  return {
    type: QUESTIONS_LOADING,
  };
};
