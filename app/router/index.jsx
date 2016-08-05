import React from 'react';
import { Route, Router, IndexRoute, browserHistory } from 'react-router';

import App from 'SearchApp';
import SearchBar from 'SearchBar';
import SearchResults from 'SearchResults';

export default (
  <Router history={browserHistory}>
    <Route path="/">
      <Route path="search" component={SearchBar} />
      <IndexRoute component={SearchResults} />
    </Route>
  </Router>
)
