import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchResults extends Component {
  render() {
    return(
      <div>
        <h3>Something cool</h3>
      </div>
    )
  }
}

export default connect()(SearchResults);
