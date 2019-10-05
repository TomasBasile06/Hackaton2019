import { combineReducers } from 'redux';
import loginReducer from '../Services/Login/reducer';
import homeReducer from '../Services/Home/reducer';


export default combineReducers({
  login: loginReducer,
  home:homeReducer
});