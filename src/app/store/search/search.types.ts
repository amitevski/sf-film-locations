import {IMovie} from '../movie';
export interface ISearch {
  results: IMovie[];
  isSearching: boolean;
}
