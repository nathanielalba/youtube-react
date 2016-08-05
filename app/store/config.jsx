import * as redux from 'redux';
import thunk from 'redux-thunk';

import { searchReducer, resultsReducer } from 'reducers';

export const config = (initialState = {}) => {
  var reducer = redux.combineReducers({
    searchText: searchReducer,
    results: resultsReducer
  });

  var store = redux.createStore(reducer, initialState, redux.compose(
    redux.appleMiddleware(thunk)
  ));

  return store;
};
