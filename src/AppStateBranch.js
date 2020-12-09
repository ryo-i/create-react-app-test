import React from 'react';
import Img from './Img';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msg1: "羊が",
      num: 1,
      msg2: "匹",
      message:  "羊が何匹？",
      flag: true
    };
    this.countUp = this.countUp.bind(this);
  }

  countUp(e) {
    this.setState((state) => ({
      num: state.num +1,
      message: state.msg1 + state.num + state.msg2,
      flag: !state.flag
    }));
  }


  render() {
    return <div className="App">
      <header className="App-header">
        <div className="App-images">
          <Img align="left" />
          <Img align="center" />
          <Img align="rignt" />
        </div>
        <h1>初めてのステート</h1>
        {this.state.flag ?
        <p>太郎「{this.state.message}？」</p>
        :
        <p>次郎「{this.state.message}！」</p>
        }
        <button onClick={this.countUp}>数える！</button>
      </header>
    </div>
  }
}

export default App;