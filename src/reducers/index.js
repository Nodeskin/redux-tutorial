import { combineReducers } from "redux";
import rootReducer from './postReducers'

//This is the rootReducer
// combineReducers is a function that help to combine all of the reducers

export default combineReducers({
    posts: rootReducer
})