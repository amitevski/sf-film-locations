import {IMovie} from '../movie';
export interface ISearch {
  results: IMovie[];
  querystring: String;
  isSearching: boolean;
}
