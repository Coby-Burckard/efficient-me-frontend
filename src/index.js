import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.scss';
import configureStore from './store/store'
import LogInOutButton from './components/LogInOutButton'

const store = configureStore()

console.log(store)

const app = (
  <Provider store={store} >
    <LogInOutButton />
  </Provider> 
)

ReactDOM.render(app, document.getElementById('root'));
