import { Component } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { NgReduxRouter } from 'ng2-redux-router';
import { createEpicMiddleware } from 'redux-observable';

import { IAppState, rootReducer } from './store';
import { SearchEpics } from './epics/search.epics';
import { middleware, enhancers } from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private ngReduxRouter: NgReduxRouter,
    private epics: SearchEpics) {

    middleware.push(createEpicMiddleware(this.epics.search));

    ngRedux.configureStore(
      rootReducer,
      {},
      middleware,
      enhancers);

    ngReduxRouter.initialize();
  }
  // title = 'app works!';
}
