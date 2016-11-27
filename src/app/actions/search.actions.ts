import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../store';

@Injectable()
export class SearchActions {
  static SEARCH = 'SEARCH';
  static SEARCH_SUCCESS = 'SEARCH_SUCCESS';
  static SEARCH_ERROR = 'SEARCH_ERROR';

  constructor(private ngRedux: NgRedux<IAppState>) { }

  search(querystring: string) {
    this.ngRedux.dispatch({
      type: SearchActions.SEARCH,
      payload: querystring,
    });
  };

  searchSuccess(results: Object) {
    this.ngRedux.dispatch({
      type: SearchActions.SEARCH_SUCCESS,
      payload: results
    });
  };

  searchError(err: Error) {
    this.ngRedux.dispatch({
      type: SearchActions.SEARCH_SUCCESS,
      payload: err
    });
  };
}

