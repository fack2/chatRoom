import {createStore} from 'redux';
import {combineReducers} from 'redux';
import {signupReducer, loginReducer} from '../reducer';

const store = combineReducers({
  signupReducer: signupReducer,
  loginReducer: loginReducer,
});

export default createStore(store);
