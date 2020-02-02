import React from 'react'
import '../styles/error.css'
import { Link } from 'react-router-dom'

export default function ErrorHandler(props) {
  const error = props.error
  let errorCode = ''
  let errorMsg = ''
  
  if (error.response) {
    errorMsg = error.response.data
    errorCode = error.response.status
  } else  {
    errorMsg = error.message
  }

  return (
    <div id="error">
      <div class="error">
        <div class="error-detail">
          <h1>:(</h1>
        </div>
        <h2>{errorCode} {errorMsg}</h2>
        <Link to="/">Go TO Homepage</Link>
      </div>
    </div>
  )
}

