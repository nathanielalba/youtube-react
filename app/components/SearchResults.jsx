import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchResults extends Component {
  constructor(props) {
    super(props);

    this.renderResults = this.renderResults.bind(this);
  }

  renderResults() {
      if(this.props.todos) {
        return (
          <ul>
            {this.props.search.map((item) => {
              <li>item</li>
            })}
          </ul>
        )
      }
      return (<p>Search for something!</p>);
  }

  render() {
    return(
      <div className="row">
        <div className="large-3"></div>
        <div className="large-6 large-centered">
          <h3>Something cool</h3>
          {this.renderResults()}
        </div>
      </div>
    )
  }
}


export default connect()(SearchResults);
