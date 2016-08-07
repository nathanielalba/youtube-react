import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/app';
import router from './router';
import { config } from './store/config';

// js loading css
$(document).foundation();
require('style!css!sass!applicationStyles');

// creating the store
const store = config();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
