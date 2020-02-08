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
      <form class="ui reply form" onSubmit={this.handleSubmit}>
        <Textarea onChange={this.handleContentsChange}/>
        <PostButton buttonLabel="포스트"/>
      </form>
    )
  }
}
