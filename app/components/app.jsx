import React, { Component } from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

export default class App extends Component {
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
