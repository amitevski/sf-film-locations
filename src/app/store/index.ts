import { IAppState, rootReducer } from './store';
import { ISearch } from './search';
import { IFilmDetails, IMovie, Movie, ILocation } from './movie';

export let middleware = [];
export let enhancers = [];

export {
  IAppState,
  ISearch,
  IFilmDetails,
  IMovie,
  ILocation,
  Movie,
  rootReducer
};
