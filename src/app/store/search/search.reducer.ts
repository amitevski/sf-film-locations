import { IPayloadAction } from '../../actions';
import { SearchActions } from '../../actions/search.actions';

import {
  INITIAL_STATE,
} from './search.initial-state';


export function searchReducer(
  state = INITIAL_STATE,
  action: IPayloadAction) {

  switch (action.type) {
    case SearchActions.SEARCH:
      return Object.assign({}, state, {
        isSearching: true
      });

    case SearchActions.SEARCH_SUCCESS:
      return Object.assign({}, state, {
        results: action.payload,
        isSearching: false
      });

    case SearchActions.SEARCH_ERROR:
      return Object.assign({}, state, {
        results: [],
        isSearching: false
      });

    default:
      return state;
  }
}