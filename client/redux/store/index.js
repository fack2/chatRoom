import {createStore, applyMiddleware} from 'redux';
import {combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {signupReducer, chatRoomReducer, loginReducer} from '../reducer';

const store = combineReducers({chatRoomReducer, signupReducer, loginReducer});

export default createStore(store, applyMiddleware(thunk));
