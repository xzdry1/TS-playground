import React, { Fragment, Component } from 'react';

class TodoList2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputVal: '',
      list: []
    }
  }

  render() {
    return (
      <Fragment>
        <div>
          <input
            value={this.state.inputVal}
            onChange={this.handleInput.bind(this)}
          />
          <button
            onClick={this.handleClick.bind(this)}
          >submit</button>
        </div>
        <ul>
          {this.state.list.map((el, index) => {
            return <li 
            onClick={this.handleDelete.bind(this,index)}
            key={index}>
              {el}
            </li>
          })}
        </ul>
      </Fragment>
    )
  }
  handleInput(e) {
    this.setState({
      inputVal: e.target.value
    })
  }
  handleClick() {
    this.setState({
      inputVal: '',
      list: [...this.state.list, this.state.inputVal]
    })
  }
  handleDelete(index){
    let newList=[...this.state.list];
    newList.splice(index,1);
    this.setState({
      list:newList
    })

  }
}

export default TodoList2;