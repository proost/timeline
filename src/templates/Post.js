import React from 'react'
import { Link } from 'react-router-dom'

export default class Post extends React.Component {
  constructor(props) {
    super(props)

    this.handlePostDelete = this.handlePostDelete.bind(this)
  }

  handlePostDelete() {
    this.props.onDelete(this.props.chatData.cid)
  }

  render() {
    return (
      <div class="comment">
        <div class="content">
          <Link to={this.props.user.url}>
            <span class="author">{this.props.user.name}</span>
          </Link>
          <div class="metadata">
            <span>{this.props.created_at}</span>
          </div>
          <div class="text">
            {this.props.chatData}
          </div>
          <div class="actions">
            <span class="" onDelete={this.handlePostDelete}>삭제</span>
          </div>
        </div>
      </div>
    )
  }
}