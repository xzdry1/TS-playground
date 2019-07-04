import React, { Component } from 'react';
import './style/animate.styl'


// export const Animate = (props,state) => {
//   let show = props.show;
//   console.log(props)
//   const handleToggle = () => {
//     show=!show
//   }
//   return (
//     <>
//       <div className={show ? 'show' : 'hide'}>hello</div>
//       <button onClick={() => handleToggle()}>toggle</button>
//     </>
//   )
// }

class Animate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    }
    this.handleToggle = this.handleToggle.bind(this);
  }

  render() {
    return (
      <>
        <div>{this.state.show}</div>
        <div className={this.state.show ? 'show' : 'hide'}>hello</div>
        <button onClick={this.handleToggle}>toggle</button>
      </>
    )
  }
  handleToggle() {
    this.setState({
      show: this.state.show ? false : true
    })
  }
}
export default Animate;