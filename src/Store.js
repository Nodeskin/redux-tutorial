import { createStore, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";
import rootReducer from "./reducers";

// Store hold the whole state tree of the app,
// you have to dispatch an action to change its stote..
// The path to the rootReducer didn't include the link
// to index.js because it is index.Js
// applymiddleware is an enhancer

const initialState = {};

const middleware = [thunk];


// we used ...middleware, because we can have more than one middlware.
//We use compose to add multiple enhancer, since we are adding a redux enhancer
const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
