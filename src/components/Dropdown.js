import React from 'react'
import { Link } from 'react-router-dom'

export class MenuDropdown extends React.Component {
  constructor(props) {
    super(props)

    this.listOptions = this.listOptions.bind(this)
  }

  listOptions() {
    let listOptions = []
    listOptions = this.props.options.map((option) => {
      return (
        <div
          role="option"
          aria-checked="false"
          aria-selected="true"
          class="item"
        >
          <Link to={option.url}>
            <span class="text" style={{color: "black"}}>{option.label}</span>
          </Link>
        </div>
      )
    })
  return listOptions
}

  render() {
    return (
      <div role="listbox" aria-expanded="false" class="ui item simple dropdown" tabindex="0">
        <div class="text" role="alert" aria-live="polite" aria-atomic="true">{this.props.label}</div>
          <i aria-hidden="true" class="dropdown icon"></i>
        <div class="right menu transition">
          {this.listOptions()}
        </div>
      </div>
    )
  }
}