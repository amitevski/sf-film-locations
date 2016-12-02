import { combineReducers, Action } from 'redux';
import { routerReducer } from 'ng2-redux-router';
import * as search from './search';
import * as movie from './movie';


export interface IAppState {
  details?: movie.IFilmDetails;
  search?: search.ISearch;
};

export const rootReducer = combineReducers<IAppState>({
  details: movie.detailReducer,
  search: search.searchReducer,
  router: routerReducer,
});
