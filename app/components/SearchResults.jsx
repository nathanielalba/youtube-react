import React, { Component } from 'react';
import { connect } from 'react-redux';

import ListVideo from './ListVideo';

class SearchResults extends Component {
  constructor(props) {
    super(props);

    this.renderResults = this.renderResults.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.renderResults();
  }

  renderResults() {
  }

  render() {
    return(
      <div className="search-results">
        <h3>Search for something!</h3>
        <ul>
        {console.log(this.props.results)}
        {
          this.props.results.map(video => {
            return <ListVideo videoId={video.id.videoId}></ListVideo>;
          })
        }
        </ul>
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
