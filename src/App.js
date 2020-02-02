import  React, { Component } from  'react';
import './styles/board.css';
import { BrowserRouter,Route } from  'react-router-dom';
import PostList from './pages/PostList';
import Post from './pages/Post';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" exact component={PostList} />
        <Route path="/post/" component={Post}/>
      </BrowserRouter>
    )
  }
}
