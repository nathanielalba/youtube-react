import * as redux from 'redux';
import thunk from 'redux-thunk';
import { setSearch } from 'actions';

import { searchReducer, resultsReducer } from 'reducers';

export const config = (initialState = {}) => {
  var reducer = redux.combineReducers({
    search: searchReducer,
    results: resultsReducer
  });

  var store = redux.createStore(reducer, initialState, redux.compose(
    redux.applyMiddleware(thunk)
  ));

  let unsubscribe = store.subscribe(() => {
    console.log(store.getState());
  });

  return store;
};
