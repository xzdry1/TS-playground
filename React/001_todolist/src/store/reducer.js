const defaultState = {
  inputVal: '123',
  list: [1, 2]
}

//reducer可以接收state,但是绝不能修改state
export default (state = defaultState, action) => {
  if (action.type === 'change_input_value') {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputVal = action.value;
    return newState;
  }
  if (action.type === "add_todoitem") {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputVal);
    newState.inputVal = '';
    return newState
  }
  return state;
}