import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';

$(document).foundation();

require('style!css!sass!applicationStyles');

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
