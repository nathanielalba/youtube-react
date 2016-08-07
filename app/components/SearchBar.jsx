import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from 'actions';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(e) {
    const { dispatch } = this.props;
    e.preventDefault();

    if(this.refs.search.value.length > 0) {
      dispatch(actions.setSearch(this.refs.search.value))
    } else {
      this.refs.search.focus();
    }
  }

  render() {
    return(
      <div className="search-bar">
        <form onSubmit={this.handleSearch} >
          <input type="text" ref="search" />
        </form>
      </div>
    )
  }
}

export default connect()(SearchBar);
