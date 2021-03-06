import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { IPayloadAction, SearchActions } from '../actions';
import { Movie, IMovie } from '../store/movie';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/catch';


@Injectable()
export class SearchEpics {
  constructor(private http: Http) { }

  /**
   * search for movies by title
   */
  search = (action$: Observable<IPayloadAction>) => {
    return action$.filter(({ type }) => type === SearchActions.SEARCH)
      .mergeMap<IPayloadAction>(({ payload }) => {
        let params = new URLSearchParams();
        params.set('querystring', payload);
        return this.http.get(`/api/films/search`, { search: params })
          .retry(2)
          .map(result => {
            let movies: IMovie[] = result.json().results;
            if (movies.length === 0) {
              return {
                type: SearchActions.SEARCH_ERROR
              };
            }
            return {
              type: SearchActions.SEARCH_SUCCESS,
              payload: movies.map(Movie.create)
            };
          })
          .catch(error => {
            return Observable.of({
              type: SearchActions.SEARCH_ERROR
            });
          });
      });
  }
}
