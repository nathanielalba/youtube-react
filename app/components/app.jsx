import React, { Component } from 'react';
import SearchBar from './SearchBar';

export default class App extends Component {
  render() {
    return(
      <div className="row">
        <div className="column large-5">
          {this.props.children}
        </div>
      </div>
    )
  }
};
