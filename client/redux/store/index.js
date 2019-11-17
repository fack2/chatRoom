import {createStore} from 'redux';
import {combineReducers} from 'redux';
import tempReducer from '../reducer';

const store = combineReducers({tempReducer});

export default createStore(store);
