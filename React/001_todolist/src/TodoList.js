import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem'
import './style.css'


class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
      list: []
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor="inputArea">输入内容</label>
          <input
            id="inputArea"
            className='input'
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
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
        // <li
        //   key={index}
        //   onClick={this.handleDelete.bind(this, index)}
        //   dangerouslySetInnerHTML={{__html:el}}
        //   ></li>
        <TodoItem
          key={index}
          content={el}
          index={index}
          deleteItem={this.handleDelete}
        />
      )
    })
  }
  handleInputChange(e) {
    const value = e.target.value
    this.setState(() => {
      return { inputValue: value }
    })
  }
  handleSubmit() {
    this.setState((prevState) => ({
      inputValue: '',
      list: [...prevState.list, prevState.inputValue]
    }))
  }
  handleDelete(index) {
    this.setState((prevState) => {
      const list = [...prevState.list];
      list.splice(index, 1);
      return { list }
    })
  }
}

export default TodoList;