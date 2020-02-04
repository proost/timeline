import React from 'react'

export function Textarea(props) {
  return (
    <textarea
      class="input100"
      placeholder="Enter your Message"
      onChange={props.handleChange}/>
  )
}