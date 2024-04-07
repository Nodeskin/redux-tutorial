// This is where the Post actions are created and evaluated.
//For actions we create types which are basically constant
//If the action includes data you add a payload
import { FETCH_POSTS, NEW_POST } from "../actions/Types";

const initialState = {
    items: [],
    item: {}

}

//NB: action is an object that has a type
export default function(state= initialState, action){
switch (action.type) {
    case FETCH_POSTS:
        return {          
            ...state,
            items: action.payload
 //This return the state and the items being fetchd
 //recall from the "postAction component" where; payload : posts
        };
    case NEW_POST:
        return{
            ...state,
            item:  action.payload,
        }

    default:
     return state;
  }
}