import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { IPayloadAction, DetailActions } from '../actions';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/catch';


@Injectable()
export class DetailEpics {
  constructor(private http: Http) { }

  /**
   * search for movies by title
   */
  fetch = (action$: Observable<IPayloadAction>) => {
    return action$.filter(({ type }) => type === DetailActions.FETCH)
      .mergeMap<IPayloadAction>(({ payload }) => {
        return this.http.get(`/api/films/${payload}`)
          .map(result => ({
            type: DetailActions.FETCH_SUCCESS,
            payload: result.json()
          }))
          .catch(error => {
            return Observable.of({
              type: DetailActions.FETCH_ERROR
            });
          });
      });
  }
}
