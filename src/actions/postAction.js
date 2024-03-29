import { FETCH_POSTS, NEW_POST } from "./Types";

//The thunk middleware allow us to call the dispatch func
// directly, so we can make async request

export const fetchPosts = () => (dispatch) => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((resp) => resp.json())
    .then((posts) =>
//Here we dispatch the data to the reducer
      dispatch({
        type: FETCH_POSTS,
        payload: posts,
      })
    );
};
