import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { signupReducer, chatRoomReducer, userProfileReducer } from "../reducer";

const store = combineReducers({
  chatRoomReducer,
  signupReducer,
  userProfileReducer
});

export default createStore(store, applyMiddleware(thunk));
