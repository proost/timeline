import React, { Component } from 'react';
import BoardRouter  from '../BoardRouter';
import PostEditor from '../templates/PostEditor';
import '../styles/postlist.css';
import PostSearcher from '../templates/PostSearcher';
import ErrorHandler from './Error'
import MenuBar from '../templates/Header';

const boardRouter = new BoardRouter();

export default class PostList extends Component {
  constructor(props){
    super(props);
    this.state = {
      posts : [],
      isModify: false,
      targetPost: {},
      nextLink: '',
      prevLink: '',
      error: null
    };
    this.handleModify = this.handleModify.bind(this);
    this.searchPost = this.searchPost.bind(this);
    this.updatePost = this.updatePost.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.cancleEdit = this.cancleEdit.bind(this);
    this.handlePreviousPage = this.handlePreviousPage.bind(this);
    this.handleNextPage = this.handleNextPage.bind(this);
  };

  async componentDidMount(){
    try {
      let response = await boardRouter.getPostsAll()
      this.setState({ 
        posts: response.data,
        nextLink: response.nextLink,
        prevLink: response.prevLink
      });
    } catch (error) {
      this.setState({ error: error })
    }
  };

  handleModify(e,post){
    this.setState({
      isModify: !this.state.isModify,
      targetPost: post
    })
  }

  updatePost(updatedPost){
    boardRouter.updatePost({
      "pk": updatedPost.pk,
      "contents": updatedPost.contents,
      "author": updatedPost.author
    }).then((response) => {
      alert("Post updated!");
      let newPosts = this.state.posts.filter( post => post.pk !== updatedPost.pk);
      newPosts.unshift(response.data);
      this.setState({
        isModify: !this.state.isModify,
        posts: newPosts
      });
    }).catch(() => {
      alert("There was an error!");
    });
  }

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

  cancleEdit(){
    this.setState({
      isModify: !this.state.isModify
    })
  }

  searchPost(searchWord){
    if (searchWord) {
      boardRouter.getPostsBySearch(searchWord)
        .then( (response) => (
          this.setState({ posts: response.data })
        ))
    }
    else {
      boardRouter.getPostsAll()
      .then( (response) => {
        this.setState({ posts: response.data });
    });
    }
  }

  handlePreviousPage(e){
    boardRouter.getPostsByURL(this.state.prevLink)
      .then( (response) => {this.setState({ 
        posts: response.data,
        nextLink: response.nextLink,
        prevLink: response.prevLink
      })}
      );
  }

  handleNextPage(e){
    boardRouter.getPostsByURL(this.state.nextLink)
      .then( (response) => { 
        this.setState({
        posts: response.data,
        nextLink: response.nextLink,
        prevLink: response.prevLink
      })}
      );
  }

  render(){
    if (this.state.error) {
      return (
        <div>
          <ErrorHandler error={this.state.error}/>
        </div>
      )
    }
    return (
      <div>
        <MenuBar/>
        <PostEditor 
          onPostUpdate={this.updatePost} 
          onPostDelete={this.deletePost}  
          onEditCancle={this.cancleEdit} 
          post={this.state.targetPost} 
          isModify={this.state.isModify} >
        </PostEditor>
        <PostSearcher onPostSearch={this.searchPost}></PostSearcher>
        <div className="timeline-container">
          {this.state.posts.map( post => (
            <div className="timeline-item">
            <div className="timeline-item-content">
              <time>Created: {post.date_of_created.split('T')[0]}</time>
              <time>Modified: {post.date_of_modified.split('T')[0]}</time>
              <p>{post.contents}</p>
                <button  onClick={(e) => this.handleModify(e,post)}>
                  Modify
                </button>
              <span className="circle" />
            </div>
          </div>
          ))
        }
        </div>
        <div class="page-button">
          <button class="ui icon left labeled button" onClick={this.handlePreviousPage}>
            <i aria-hidden="true" class="left arrow icon"></i>
            Previous Page
          </button>
          <button class="ui icon right labeled button">
            Next Page
            <i aria-hidden="true" class="right arrow icon" onClick={this.handleNextPage}></i>
          </button>
        </div>
      </div>
    );
  };
}