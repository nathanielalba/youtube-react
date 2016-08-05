import axios from 'axios';
import { SET_SEARCH_TEXT, SET_SEARCH_RESULTS } from 'types';

export const searchReducer = (state = '', action) => {
  switch(action.type) {
    case SET_SEARCH_TEXT:
      return action.payload;
  }
  return state;
}

export const searchResults = (state = [], action) => {
  switch(action.type) {
    case SET_SEARCH_RESULTS:
      return state;
  }
  return state;
}
