import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combideReducers } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


// ステート
let counter = {
  counter: 0
}


// レデューサー
function HitsyjiCounter(state = counter, action) {
  switch (action.type) {
    case 'Plus': 
      return {
        counter: state.counter + 1
      };
    case 'Minus':
      return {
        counter: state.counter - 1
      };
    default:
      return state; 
  }
}


// ストア作成
let store = createStore(HitsyjiCounter);


// レンダリング
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
