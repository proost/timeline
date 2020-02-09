import React, { Component } from 'react';

import BoardRouter  from '../BoardRouter';
import ErrorHandler from '../pages/Error'
import MenuBar from '../templates/Header';

import PostList from '../templates/PostList';
import { LeftLabeldButton, RightLabeldButton } from '../components/Buttons';

const boardRouter = new BoardRouter();

export default class ChatRoom extends Component {
  constructor(props){
    super(props)
    this.state = {
      posts : [],
      nextLink: '',
      prevLink: '',
      error: null
    }

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
      this.setState({ error: null })
    }
  };

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
        <div class="container">
          <div class="row">
            <div class="col-lg-8 offset-lg-2">
              <PostList posts={this.state.posts}/>
            </div>
          </div>
          <div class="row mt-5">
            <div class="offset-lg-4">
              <LeftLabeldButton
                buttonLabel="이전 포스트들"
                onClick={this.handlePreviousPage}/>
              <RightLabeldButton
                buttonLabel="다음 포스트들"
                onClick={this.handleNextPage}/>
           </div>
          </div>
        </div>
      </div>
    );
  };
}