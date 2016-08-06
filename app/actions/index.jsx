import { SET_SEARCH, SET_SEARCH_RESULTS, SET_SELECTED_VIDEO } from 'types';
import YoutubeSearch from 'youTubeAPI';

export const setSearch = (text) => {
  let videos = [];

  const promise = new Promise((resolve, reject) => {
    YoutubeSearch(text, (data) => {
      console.log(data);
      videos.concat(data);
      return data;
    });

    resolve();
  })

  promise.then(() => {
    console.log(videos);
  });

  return {
    type: SET_SEARCH,
    payload: text
  };
};

export const setResults = (results) => {
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
