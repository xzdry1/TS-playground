import React from 'react'

class TodoItem extends React.Component {
  constructor(pros) {
    super(pros);
    this.handleClick = this.handleClick.bind(this)
  }
  render() {
    const { content } = this.props;
    return <div
      onClick={this.handleClick}
    >{content}</div>
  }
  handleClick() {
    const { deleteItem, index } = this.props
    deleteItem(index);
  }
}

export default TodoItem