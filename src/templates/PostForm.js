import React, { Component } from 'react'
import { Textarea } from '../components/Inputs'
import { PostButton } from'../components/Buttons'

import BoardRouter from '../BoardRouter'

const boardRouter = new BoardRouter()

export default class PostForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contents : '',
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleContentsChange = this.handleContentsChange.bind(this)
  }

  handleContentsChange(event){
    this.setState({
      contents: event.target.value
    })
  }

  async handleSubmit(){
    try {
      await boardRouter.createPost({
        "author": this.props.author,
        "contents": this.state.contents
      })
      this.setState({ 
        contents: ''
      })
    } catch(error) {
      this.props.handleError(error)
    }
  }

  render() {
    return (
      <div class="container-contact100" id="new-post-form">
        <div class="wrap-contact100">
          <form class="contact100-form validate-form" onSubmit={this.handleSubmit}>
            <span class="contact100-form-title">
              새로운 포스트
            </span>
            <div class="wrap-input100 validate-input">
              <Textarea handleChange={this.handleContentsChange}/>
              <span class="focus-input100"></span>
            </div>
            <div class="container-contact100-form-btn">
              <PostButton buttonLabel="포스팅"/>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
