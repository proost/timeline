import React from 'react'

export function EmailForm(props) {
  return (
    <>
      <label for="inputEmail" class={props.labelLayout}>{props.labelName}</label>
      <div class={props.inputLayout}>
        <input 
          type="email" 
          class="form-control" 
          id="inputEmail" 
          placeholder={props.placeholder}/>
      </div>
    </>
  )
}