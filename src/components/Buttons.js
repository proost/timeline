import React from 'react'

export function PostButton(props) {
  return (
    <button class="ui icon primary left labeled button">
      <i aria-hidden="true" class="edit icon"></i>
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

export function SearchButton(props) {
  return (
    <button type="submit" class="ui icon button" onClick={props.onClick}>
      <i aria-hidden="true" class="search icon"></i>
    </button>
  )
}

export function LeftLabeldButton(props) {
  return (
    <button class="ui icon left labeled button" onClick={props.onClick}>
      <i aria-hidden="true" class="left arrow icon"></i>
      {props.buttonLabel}
    </button>
  )
}

export function RightLabeldButton(props) {
  return (
    <button class="ui icon right labeled button">
      {props.buttonLabel}
      <i aria-hidden="true" class="right arrow icon" onClick={props.onClick}></i>
    </button>
  )
}