import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from 'actions';
import SearchBar from 'SearchBar';
import SearchResults from 'SearchResults';

class App extends Component {
  render() {
    return(
      <div className="row">
        <div className="column small-centered large-8">
          <div className="container">
            <SearchBar />
            <SearchResults />
          </div>
        </div>
      </div>
    )
  }
};

function mapStateToProps(state) {
  return {
    search: state.search,
    results: state.results
  }
}

export default connect(mapStateToProps)(App);
