import React, { Fragment, Component } from 'react';
import TodoItem from './TodoItem2';

class TodoList2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputVal: '',
      list: []
    }
    this.handleDelete = this.handleDelete.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  render() {
    return (
      <Fragment>
        <div>
          <input
            value={this.state.inputVal}
            onChange={this.handleInput}
          />
          <button
            onClick={this.handleClick}
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
          content={el}
          index={index}
          key={index}
          deleteItem={this.handleDelete}
        />
      )
    })
  }
  handleInput(e) {
    const value = e.target.value;
    this.setState(() => ({
      inputVal: value
    }))
  }
  handleClick() {
    this.setState((prevState) => ({
      inputVal: '',
      list: [...prevState.list, prevState.inputVal]
    }))
  }
  handleDelete(index) {

    this.setState((prevState) => {
      let list = [...prevState.list];
      list.splice(index, 1);
      return { list }
    })

  }
}

export default TodoList2;