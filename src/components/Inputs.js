import React from 'react'

export function Textarea(props) {
  return (
    <textarea
      class="input100"
      placeholder="Enter your Message"
      onChange={props.handleChange}/>
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