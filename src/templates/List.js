import React from 'react';
import { Link } from 'react-router-dom';

export default class List extends React.Component {
  constructor(props) {
    super(props);

    this.readyItems = this.readyItems.bind(this);
  }

  readyItems() {
    let items = [];
    for(let i=0; i<this.props.items.length; i++) {
      items.push(
        <div role="listitem" class="item">
          <div class="content">
            <Link to={"/profile/" + items[i].id}>
              <span class="header">items[i].name</span>
            </Link>
            <div class="description">
              items[i].value
            </div>
          </div>
        </div>
      );
    }

    return items;
  }

  render() {
    return (this.readyItems())
  }
} 
