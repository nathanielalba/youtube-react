import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class SearchResults extends Component {
  render() {
    return(
      <div>
        <Link to="/search">Search for more</Link>
        <h3>Something cool</h3>
      </div>
    )
  }
}

export default connect()(SearchResults);
