import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postAction";

//The connect helps to connect the component to redux-store
//note; store was provided by the provider component

class Posts extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  // componentWillRecieveProps(nextProps) {
  //   if (nextProps.newPost) {
  //     this.props.posts.unshift(nextProps.newPost)
  //   }
  // }

  render() {
    const postItems = this.props.posts.map((post) => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));
    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    );
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object,
};

//state.posts bcus the rootReducer is set to posts
const mapStateToProps = (state) => ({
  posts: state.posts.items,
  newPost: state.posts.item,
  
});
//export connect to link the component to the redux store. Takes in 2 set of parenthesis
//
export default connect(mapStateToProps, { fetchPosts })(Posts);
