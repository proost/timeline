import React from 'react'

export function PostButton(props) {
  return (
    <button type="submit" class="contact100-form-btn">
      {props.buttonLabel}
    </button>
  )
}

export function LoginButton(props) {
  return (
  <div class="container-login100-form-btn">
    <button class="login100-form-btn">
      {props.buttonLabel}
    </button>
  </div>
  )
}