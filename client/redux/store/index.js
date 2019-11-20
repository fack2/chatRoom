import {createStore, applyMiddleware} from 'redux'
import {combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {signupReducer, signInReducer, chatRoomReducer} from '../reducer'

const store = combineReducers({chatRoomReducer, signInReducer, signupReducer})

export default createStore(store, applyMiddleware(thunk))
