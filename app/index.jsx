import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/app';
import router from './router';

// js loading css
$(document).foundation();
require('style!css!sass!applicationStyles');

// creating the store
const store = createStore(App);

ReactDOM.render(
  <Provider store={store}>
    { router }
  </Provider>,
  document.getElementById('app')
);
