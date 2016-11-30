import {
  ISearch
} from './search.types';

export const SearchFactory = (): ISearch => {
  return {
    results: [],
    isSearching: false,
    querystring: ''
  };
};

export const INITIAL_STATE: ISearch = SearchFactory();
