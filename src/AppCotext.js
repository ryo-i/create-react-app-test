import React, { Component } from 'react';
import Img from './Img';
import './App.css';

let data = {
  title: 'はじめてのこんてきすと',
  message: 'これはコンテキストを使って読み込んでみたテキストなんです。はい。'
}

const HajimeteContext = React.createContext(data);

class App extends React.Component {
  newdata = {
    title: 'はじめてのぷろばいだ',
    message: 'ここだけプロバイダを使って書き換えてみたテキストなんです。はい。'  
  }

  render() {
    return (
    <div className="App">
      <header className="App-header">
        <div className="App-images">
          <Img align="left" />
          <Img align="center" />
          <Img align="rignt" />
        </div>
        <h1>コンテキストテスト</h1>
        <Title />
        <Message />
        <HajimeteContext.Provider value={this.newdata}>
          <Title />
          <Message />
        </HajimeteContext.Provider>
        <Title />
        <Message />
      </header>
    </div>
    );
  }
}

class Title extends React.Component {
  static contextType = HajimeteContext;

  render() {
    return (
    <div>
      <h2>{ this.context.title }</h2>
    </div>
    );
  }
}

class Message extends React.Component {
  static contextType = HajimeteContext;

  render() {
    return (
    <div>
      <p>{ this.context.message }</p>
    </div>
    );
  }
}

export default App;
