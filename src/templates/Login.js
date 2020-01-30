import React, { Component } from 'react'
import EmailForm from '../components/EmailForm'

export default class Login extends Component {
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    this.props.history.push("/posts")
  }

  render() {
    return (
      <form class="form-inline" onSubmit={this.handleSubmit} method="post" action="/login/">
        <EmailForm
          labelName="Email"
          placeholder="이메일을 입력하세요"/>
        <button type="submit" class="btn btn-primary">로그인</button>
      </form>
    )
  }
}