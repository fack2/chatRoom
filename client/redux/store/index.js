import {createStore, applyMiddleware} from 'redux';
import {combineReducers} from 'redux';
import userProfileReducer from '../reducer/userProfileReducer';
import thunk from 'redux-thunk';
const store = combineReducers({userProfileReducer});

export default createStore(store,applyMiddleware(thunk));
