import { IAppState, rootReducer } from './store';
import { ISearch } from './search';
import { IFilmDetails } from './movie';

export let middleware = [];
export let enhancers = [];

export {
  IAppState,
  ISearch,
  IFilmDetails,
  rootReducer
};
