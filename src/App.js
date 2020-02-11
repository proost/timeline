import  React, { Component } from  'react'
import { BrowserRouter,Route } from  'react-router-dom'
import ChatRoom from './pages/ChatRoom'
import Login from './pages/Login';
import Signup from './pages/Signup';

import 'semantic-ui-css/semantic.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" exact component={ChatRoom} />
        <Route path="/login/" component={Login}/>
        <Route path="/signup/" exact component={Signup}/>
      </BrowserRouter>
    )
  }
}
