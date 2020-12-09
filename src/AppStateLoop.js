import React, { Component } from 'react';
import Img from './Img';
import './App.css';

class App extends React.Component {
  song = [
    '抱きしめたい',
    '空いろのくれよん',
    '風をあつめて',
    '暗闇坂むささび変化',
    'はいからはくち',
    'はいから・びゅーちふる',
    '夏なんです',
    '花いちもんめ',
    'あしたてんきになあれ',
    '颱風',
    '春らんまん',
    '愛餓を'
  ];

  constructor(props) {
    super(props);
    this.state = {
      list:this.song
    };
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
        <h2>はっぴいえんど</h2>
        <List title="はっぴいえんど（1970）" song={this.song} />
      </header>
    </div>
  }
}

class List extends Component {
  number = 1;

  render () {
    let song = this.props.song;
    return (
      <div>
        <p>{ this.props.title }</p>
        <ul>
          {song.map((item) =>
            <Item number={this.number++} value={item} key={this.number} />
          )}
        </ul>
      </div>
    );
  }
}

  class Item extends Component {
    liStyle = {
      listStyleType: "none",
      textAlign: "left"
    };

    render () {
      return (
      <li style={this.liStyle}>{this.props.number}. {this.props.value}</li>
      );
    }
  }

export default App;
