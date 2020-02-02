import React from 'react'
import BoardRouter from '../BoardRouter'
import { MenuBar } from '../templates/Header'
import ErrorHandler from './Error'
import '../styles/main.css'
import '../styles/util.css'

const boardRouter = new BoardRouter()

class Post extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      contents : '',
      author: '',
      error: null
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
      let res = await boardRouter.createPost({
        "author": this.state.author,
        "contents": this.state.contents
      })
      this.setState({ 
        author: '', contents: ''
      })
    } catch(error) {
      this.setState({error: error})
    }
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
        <div class="container-contact100" id="new-post-form">
          <div class="wrap-contact100">
            <form class="contact100-form validate-form" onSubmit={this.handleSubmit}>
              <span class="contact100-form-title">
                새로운 포스트
              </span>
              <div class="wrap-input100 validate-input">
                <textarea 
                  class="input100"
                  name="message"
                  placeholder="Enter your Message"
                  onChange={this.handleContentsChange}/>
                  <span class="focus-input100"></span>
              </div>
              <div class="container-contact100-form-btn">
                <button class="contact100-form-btn">
                  포스팅
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Post