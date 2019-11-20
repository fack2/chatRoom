import {createStore, applyMiddleware} from 'redux';
import {combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {
  signupReducer,
  chatRoomReducer,
  loginReducer,
  userProfileReducer,
} from '../reducer';

const store = combineReducers({
  chatRoomReducer,
  signupReducer,
  loginReducer,
  userProfileReducer,
});

export default createStore(store, applyMiddleware(thunk));
