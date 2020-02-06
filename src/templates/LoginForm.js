import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { LoginButton } from '../components/Buttons'
import { EmailForm, PasswordForm } from '../components/Inputs'

export default class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    try {
      this.props.history.push("/posts")
    } catch (e) {
      this.props.handleError(event)
    }
  }

  handleChange(event) {
    if (event.target.type === "email") {
      this.setState({email: event.target.value})
    } else if (event.target.type === "password") {
      this.setState({password: event.target.value})
    }
  }

  render() {
    return (
      <div class="limiter">
        <div class="container-login100">
          <div class="wrap-login100">
            <form class="login100-form p-l-55 p-r-55 p-t-178" onSubmit={this.handleSubmit}>
              <span class="login100-form-title">
                로그인
              </span>
              <EmailForm placeholder="이메일을 입력하세요" handleChange={this.handleChange}/>
              <PasswordForm placeholder="비밀번호" handleChange={this.handleChange}/>
              <div class="text-right p-t-13 p-b-23">
                <Link to="/missing" class="txt2">
                  <span class="txt2">
                    비밀번호 분실
                  </span>
                </Link>
              </div>
              <LoginButton buttonLabel="로그인"/>
              <div class="flex-col-c p-t-170 p-b-40">
                <span class="txt1 p-b-9">
                  아직 회원이 아니신가요? 
                </span>
                <Link to="/signup">
                  <span class="txt3">
                    회원가입
                  </span>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}