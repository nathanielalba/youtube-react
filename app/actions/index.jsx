import { SET_SEARCH, SET_SEARCH_RESULTS, SET_SELECTED_VIDEO } from 'types';
import YoutubeSearch from 'youTubeAPI';

export function fetchVideos(terms) {
  return function(dispatch) {
    return YoutubeSearch(terms, (data) => {
      dispatch(setResults(data));
    });
  }
}

export function setSearchText(text) {
  return {
    type: SET_SEARCH,
    payload: text
  }
}


export function setSearch(text) {
  return dispatch => {
    dispatch(fetchVideos(text));
    dispatch(setSearchText(text));
  }
};

export function setResults(results) {
  return {
    type: SET_SEARCH_RESULTS,
    payload: results
  };
};

export const setSelectedVideo = (id) => {
  return {
    type: SET_SELECTED_VIDEO,
    payload: id
  };
};
