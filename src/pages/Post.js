import React from 'react'

import { MenuBar } from '../templates/Header'
import  PostForm  from '../templates/PostForm'
import ErrorHandler from './Error'

import '../styles/main.css'
import '../styles/util.css'

class Post extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      error: null
    }

    this.handleNetworkError = this.handleNetworkError.bind(this)
  }

  handleNetworkError(event) {
    this.setState({error: event})    
  }

  render() {
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
        <PostForm handleError={this.handleNetworkError}/>
      </div>
    )
  }
}

export default Post