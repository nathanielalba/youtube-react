import React, { Component } from 'react';

export default class ListVideo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const videoUrl = `https://www.youtube.com/embed/${this.props.videoId}`
    return(
      <iframe width="420" height="315" src={videoUrl}>
      </iframe>
    )
  }
}
