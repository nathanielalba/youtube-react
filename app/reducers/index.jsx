import { SET_SEARCH, SET_SEARCH_RESULTS } from 'types';

const defaultSelectedVideo = {
  video: 0
}

export const searchReducer = (state = '', action) => {
  switch(action.type) {
    case SET_SEARCH:
      return action.payload;
  }
  return state;
}

export const resultsReducer = (state = [], action) => {
  switch(action.type) {
    case SET_SEARCH_RESULTS:
      return [...action.payload];
  }
  return state;
}



export const selectedVideoReducer = (state = defaultSelectedVideo, action) => {
  switch(action.type) {
    case SET_SELECTED_VIDEO:
      return [...action.payload];
  }
  return state;
}
