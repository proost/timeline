import React from 'react'
import { Link } from 'react-router-dom'

export function MenuBar(props) { 
  return (
  <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <a class="navbar-brand">Time Line</a>
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <Link class="nav-link" to="/">Posts</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/post">new Post</Link>
        </li>
      </ul>
    </div>
  </nav>
  )
}

export default MenuBar