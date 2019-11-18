import {createStore, applyMiddleware} from 'redux'
import {combineReducers} from 'redux'
import tempReducer from '../reducer'
import chatRoomReducer from '../reducer/chatRoomReducer'
import thunk from 'redux-thunk'
const store = combineReducers({chatRoomReducer})

export default createStore(store, applyMiddleware(thunk))
