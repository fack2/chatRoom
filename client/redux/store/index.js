import {createStore} from 'redux'
import {combineReducers} from 'redux'
import {signupReducer} from '../reducer'

const store = combineReducers({
  signupReducer: signupReducer,
})

export default createStore(store)
