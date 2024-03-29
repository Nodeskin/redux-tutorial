import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import rootReducer from './reducers'

// Store hold the whole state tree of the app,
// you have to dispatch an action to change its stote..
// The path to the rootReducer didn't include the link 
// to index.js because it is index.Js
// applymiddleware is an enhancer

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
