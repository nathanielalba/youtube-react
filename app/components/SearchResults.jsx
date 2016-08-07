import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchResults extends Component {
  constructor(props) {
    super(props);

    this.renderResults = this.renderResults.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  renderResults() {
      if(this.props.results) {
        return (
          <ul>
            {this.props.search.map((item) => {
              <li>item</li>
            })}
          </ul>
        )
      }
      return (<h3>Search for something!</h3>);
  }

  render() {
    return(
      <div className="search-results">
        {this.props.results}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    results: state.results
  }
}

export default connect(mapStateToProps)(SearchResults);
