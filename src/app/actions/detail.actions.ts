import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../store';

@Injectable()
export class DetailActions {
  static FETCH = 'FETCH';
  static FETCH_SUCCESS = 'FETCH_SUCCESS';
  static FETCH_ERROR = 'FETCH_ERROR';

  constructor(private ngRedux: NgRedux<IAppState>) { }

  fetch(slug: string) {
    this.ngRedux.dispatch({
      type: DetailActions.FETCH,
      payload: slug,
    });
  };
}

