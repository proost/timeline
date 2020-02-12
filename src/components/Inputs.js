import React from 'react';
import styled from 'styled-components';

export function Textarea(props) {
  return (
    <div class="field">
      <textarea 
        rows="3"
        onChange={props.onChange}></textarea>
    </div>
  )
}

export function EmailForm(props) {
  return (
    <div class="wrap-input100 m-b-16">
      <input class="input100" type="email" placeholder={props.placeholder} onChange={props.handleChange}/>
      <span class="focus-input100"></span>
    </div>
  )
}

export function PasswordForm(props) {
  return (
    <div class="wrap-input100">
      <input class="input100" type="password" placeholder={props.placeholder} onChange={props.handleChange}/>
      <span class="focus-input100"></span>
    </div>
  )
}

export function TextInput(props) {
  return (
    <div class="ui icon input">
      <input type="text" 
        placeholder={props.placeholder} 
        onChange={props.handleClick}
        onClick={props.handleClick} />
    </div>
  )
}

export function SearchUser(props) {
  return (
    <div class="ui fluid left icon input">
      <input type="email" placeholder={props.placeholder}/>
        <i aria-hidden="true" class="users icon"></i>
      <button class="ui button">초대</button>
    </div>
  )
}

const CommonInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  outline: none;
  margin:0;
`;

export const StyledInput = styled.input`
  background: #fff;
  border: 1px solid #dbdbdb;
  font-size: 1.6em;
  padding: .8em .5em;
  border-radius: 2px;
`;

export function SignupInput({onChange, children }) {
  return (
    <StyledInput onChange={onChange}>{children}</StyledInput>
  )
}

export const SubmitInput = styled(CommonInput)`
  background: rgba(148,186,101,0.7);
  box-shadow: 0 3px 0 0;
  border-radius: 2px;
  border: none;
  color: #fff;
  cursor: pointer;
  display: block;
  line-height: 1.6em;
  margin: 2em 0 0;
  outline: none;
  padding: .8em 0;
  text-shadow: 0 1px #68B25B;
`;

