import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from './store'


class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = store.getState();
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    store.subscribe(this.handleStoreChange);//订阅store
  }

  render() {
    return (
      <div style={{ marginTop: '10px', marginLeft: '10px' }}>
        <div>
          <Input
            value={this.state.inputVal}
            placeholder="todo info"
            style={{ width: '200px' }}
            onChange={this.handleInput}
          />
          <Button
            onClick={this.handleSubmit}
            type="dashed">Submit</Button>
        </div>
        <List
          style={{ marginTop: '10px', width: '270px' }}
          bordered
          dataSource={this.state.list}
          renderItem={item => (
            <List.Item>
              {item}
            </List.Item>
          )}
        />
      </div>

    )
  }
  handleSubmit() {
    const action = {
      type: 'add_todoitem',
    }
    store.dispatch(action);
  }
  handleStoreChange() {
    this.setState(store.getState())
  }
  handleInput(e) {
    const value = e.target.value;
    const action = {
      type: 'change_input_value',
      value
    }
    store.dispatch(action);
  }
}

export default TodoList;