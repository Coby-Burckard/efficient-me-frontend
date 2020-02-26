import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.scss';
import configureStore from './store/store'
import Counter from './components/Counter'

const store = configureStore()

console.log(store)

const app = (
  <Provider store={store} >
    <Counter />
  </Provider> 
)

ReactDOM.render(app, document.getElementById('root'));
