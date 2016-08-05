const { SET_SEARCH_TEXT, SET_SEARCH_RESULTS } from 'types';

export const setSearch = (text) => {
  return {
    type: SET_SEARCH_TEXT,
    payload: text
  }
}

export const setResults = (results) => {
  return {
    type: SET_SEARCH_RESULTS,
    payload: results
  }
}
