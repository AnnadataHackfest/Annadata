import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import questionReducer from './questionReducer';
import infoReducer from './infoReducer';
import soilReducer from './soilReducer';

export default combineReducers({
  item: itemReducer,
  error: errorReducer,
  auth: authReducer,
  question: questionReducer,
  info: infoReducer,
  soil: soilReducer,
});
