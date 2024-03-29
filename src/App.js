import "./App.css";
import { Component } from "react";
import Post from "./components/Posts";
import PostForm from "./components/PostForm";
import { Provider } from "react-redux";
import store from './Store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <PostForm />
          <hr />
          <Post />
        </div>
      </Provider>
    );
  }
}

export default App;
