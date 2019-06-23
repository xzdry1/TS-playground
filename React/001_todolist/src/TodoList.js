import React, { Component, Fragment } from 'react';
import './style.css'

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
      list: []
    }
  }

  render() {
    return (
      <Fragment>
        <div>
          <input
            className='input'
            value={this.state.inputValue}
            onChange={this.handleInputChange.bind(this)}
          />
          <button
            onClick={this.handleSubmit.bind(this)}
          >submit</button>
        </div>
        <ul>
          {this.state.list.map((el, index) => {
            return <li
              key={index}
              onClick={this.handleDelete.bind(this, index)}
              dangerouslySetInnerHTML={{__html:el}}
              ></li>
          })}
        </ul>
      </Fragment>
    )
  }

  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }
  handleSubmit() {
    this.setState({
      inputValue: '',
      list: [...this.state.list, this.state.inputValue]
    })
  }
  handleDelete(index) {
    let newList = [...this.state.list];
    newList.splice(index, 1);
    this.setState({
      list: newList
    })
  }
}

export default TodoList;