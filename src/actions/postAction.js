import { FETCH_POSTS, NEW_POST } from "./Types";

//The thunk middleware allow us to call the dispatch func
// directly, so we can make async request..
//fetchPost takes a function, which in turn calls
// an anonymous function wc takes dispatch as an arg..
//Then we dispatch the data to our postReducer

export const fetchPosts = () => {
  return (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((resp) => resp.json())
      //dispatch the data to the reducer
      .then((posts) =>
        dispatch({
          type: FETCH_POSTS,
          payload: posts,
        })
      );
  };
};

export const createPost = (postData) => (dispatch) => {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) =>
      dispatch({
        type: NEW_POST,
        payload: post,
      })
    );
};
