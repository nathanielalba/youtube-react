import React from 'react';
import { Route, Router, IndexRoute, browserHistory } from 'react-router';

import App from 'SearchApp';

export default (
  <Router history={browserHistory}>
    <Route path="/">
      <IndexRoute component={App} />
    </Route>
  </Router>
)
