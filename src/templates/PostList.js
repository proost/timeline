import React, { Component } from 'react'

import BoardRouter  from '../BoardRouter'
import Post from './Post'

import PostForm from './PostForm';

const boardRouter = new BoardRouter();

export default class PostList extends Component {
  constructor(props){
    super(props);

    this.deletePost = this.deletePost.bind(this);
  };

  deletePost(tartgetPost){
    boardRouter.deletePost(tartgetPost)
      .then( (response) => {
        alert("Post deleted!");
        let newPosts = this.state.posts.filter( post => post.pk !== tartgetPost.pk)
        this.setState({
          isModify: !this.state.isModify,
          posts: newPosts
        });
      }).catch(() => {
        alert("There was an error!");
      });
  }

  render() {
    return (
      <div class="ui comments">
        <h3 class="ui dividing header">채팅</h3>
        {
          this.props.posts.map((post) => {
            return (
              <Post
                user={post.userData}
                created_at={post.created_at}
                chatData={post.chatData}
                onDelete={this.deletePost}
              />
            )
          })
        }
        <PostForm/>
      </div>
    )
  }
}