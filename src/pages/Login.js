import React, { Component } from 'react'
import LoginForm from '../templates/LoginForm'
import ErrorHandler from '../pages/Error'

import '../styles/login.css'
import '../styles/util.css'

export default class Login extends Component {
  constructor(props) {
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
    } else {    
      return (
        <div>
          <LoginForm handleError={this.handleNetworkError}/>
        </div>
      )
    }
  }
} 