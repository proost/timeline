import React from 'react'

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
      <button class="ui button">찾기</button>
    </div>
  )
}