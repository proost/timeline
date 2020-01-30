import React, { Component } from 'react'
import BoardRouter from '../board/BoardRouter'
import '../styles/main.css'
import '../styles/util.css'

const boardRouter = new BoardRouter()

export default class Post extends Component {
  constructor(props){
    super(props)
    this.state = {
        contents : '',
        author: ''
    }

    this.handlePostAdd = this.handlePostAdd.bind(this)
    this.handleAuthorChange = this.handleAuthorChange.bind(this)
    this.handleContentsChange = this.handleContentsChange.bind(this)
  }

  handleAuthorChange(event){
    this.setState({
      author: event.target.value
    })
  }

  handleContentsChange(event){
    this.setState({
      contents: event.target.value
    })
  }

  handlePostAdd(){
    boardRouter.createPost({
      "author": this.state.author,
      "contents": this.state.contents
    }).then((response) => {
        alert("Success!!")
        this.setState({ 
            author: '',
            contents: ''
        })
      }).catch(() => {
        alert("There was an error!!!")
      })
  }

  render(){
    return (
      <div class="container-contact100">
        <div class="wrap-contact100">
          <form class="contact100-form validate-form">
            <span class="contact100-form-title">
              Create New Post
            </span>
            <div class="wrap-input100 validate-input">
              <input  class="input100" type="text" placeholder="Author" onChange={this.handleAuthorChange}></input>
                <span class="focus-input100"></span>
            </div>
      
            <div class="wrap-input100 validate-input" data-validate = "Message is required">
              <textarea class="input100" name="message" placeholder="Enter your Message" onChange={this.handleContentsChange}></textarea>
                <span class="focus-input100"></span>
            </div>
      
            <div class="container-contact100-form-btn">
              <button class="contact100-form-btn" onClick={this.handlePostAdd}>
                Submit Post
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}