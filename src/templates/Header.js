import React from 'react'
import { Link } from 'react-router-dom'

import { TextInput } from '../components/Inputs'
import { SearchButton } from '../components/Buttons'

export default class MenuBar extends React.Component { 
  constructor(props) {
    super(props)
    this.state = {
      user: {
        name: 'user',
        url: '/profile/:id'
      },
      searchTerm: '',
    }

    this.handleSearchBar = this.handleSearchBar.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSearchBar(event) {
    this.setState({searchTerm: event.target.value})
  }

  handleSubmit(event) {
    if (event.keyCode === 13 || event.type === "click") {
      //찾는 것
    }
  }

  render() {
    return (
      <div class="ui teal large inverted stackable menu">
        <Link to="/">
          <div class="item">Timeline</div>
        </Link>
        <div class="right menu">
          <TextInput placeholder="검색" onChange={this.handleSearchBar}/>
          <SearchButton onClick={this.handleSubmit}/>
          <Link to={this.state.user.url}>
            <div class="item">{this.state.user.name}</div>
          </Link>
        </div>
      </div>
    )
  }
}
