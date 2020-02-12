import React from 'react';
import { Form, EmailForm, ConfirmPasswordForm, SignupSubmitForm, PasswordForm, TextForm } from '../components/Forms';
import { H2 } from '../components/InlineTag';

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      password: '',
      confirmPassword: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit(event) {
    if (this.state.password !== this.state.confirmPassword) {
      event.preventDefault();
    } else {
      //회원가입 진행
    }
  }

  handleInputChange(event) {
    let inputType = event.target.name;
    switch(inputType) {
      case 'email':
        this.setState({email: event.target.value});
        break;
      case 'password':
        this.setState({password: event.target.value});
        break;
      case 'confirm_password':
        this.setState({confirmPassword: event.target.value});
        break;
      case 'text':
        this.setState({name: event.target.value});
        break;
      default:
        console.log('impossible');
    }
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <H2>회원가입</H2>
          <EmailForm onChange={this.handleInputChange}/>
          <PasswordForm onChange={this.handleInputChange}/>
          <ConfirmPasswordForm onChange={this.handleInputChange}/>
          <TextForm onChange={this.handleInputChange} label="이름"/>
          <SignupSubmitForm/>
      </Form>
    )
  }
}