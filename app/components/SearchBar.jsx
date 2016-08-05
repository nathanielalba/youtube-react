import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchBar extends Component {
  render() {
    return(
      <div className="search-bar">
        <input type="text" />
      </div>
    )
  }
}

export default connect()(SearchBar);
