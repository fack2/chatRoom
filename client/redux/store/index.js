import {createStore, applyMiddleware} from 'redux'
import {combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {signupReducer, chatRoomReducer} from '../reducer'

const store = combineReducers({chatRoomReducer, signupReducer})

export default createStore(store, applyMiddleware(thunk))
