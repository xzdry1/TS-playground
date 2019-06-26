import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem1';

class TodoList1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
      list: []
    }

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  render() {
    return (
      <Fragment>
        <div>
          <input
            value={this.state.inputValue}
            onChange={this.handleInput} />
          <button
            onClick={this.handleSubmit}
          >submit</button>
        </div>
        <ul>
          {this.getTodoItem()}
        </ul>
      </Fragment>
    )
  }
  getTodoItem() {
    return this.state.list.map((el, index) => {
      return (
        <TodoItem
          key={index}
          content={el}
          index={index}
          deleteItem={this.handleDelete}
        />
      )
    })
  }
  handleInput(e) {
    const value = e.target.value;
    this.setState(() => ({
      inputValue: value
    }))
  }
  handleDelete(index) {
    this.setState((prevState) => {
      const list = [...prevState.list];
      list.splice(index, 1);
      return {
        list
      }
    })
  }
  handleSubmit() {
    this.setState((prevState) => ({
      inputValue: '',
      list: [...prevState.list, prevState.inputValue]
    }))
  }
}

export default TodoList1;