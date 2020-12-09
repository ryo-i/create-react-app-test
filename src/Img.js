import React from 'react';
import logo from './img/prof.jpg';
import './App.css';

class Img extends React.Component {
  align = 'left';
  style = {};

  constructor(props) {
    super();
    this.align = props.align;
    this.style = {
      textAlign: this.align 
    };
  }
  render() {
    return  <img src={logo} className="App-logo" alt="logo" style={this.style} />
  }
}

export default Img;
