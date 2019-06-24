import React from 'react'

class TodoItem extends React.Component {
  constructor(pros) {
    super(pros);
    this.handleClick = this.handleClick.bind(this)
  }
  render() {
    return <div
      onClick={this.handleClick}
    >{this.props.content}</div>
  }
  handleClick() {
    this.props.deleteItem(this.props.index);
  }
}

export default TodoItem