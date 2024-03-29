// This is where the Post actions are created and evaluated.
//For actions we create types which are basically constant
//If the action includes data you add a payload
import { FETCH_POSTS, NEW_POST } from "../actions/Types";

const initialState = {
    items: [],
    item: {}

}

export default function (state= initialState, action){
switch (action.type) {
    case FETCH_POSTS:
        return {
//This return the state and the item being fetchd
            ...state,
            items: action.payload
        };

    default:
     return state;
  }
}