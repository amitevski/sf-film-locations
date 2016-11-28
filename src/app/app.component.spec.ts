/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { SearchEpics } from './epics';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { FormsModule } from '@angular/forms';
import { NgRedux } from 'ng2-redux';
import { NgReduxRouter } from 'ng2-redux-router';
import { Location, LocationStrategy } from '@angular/common';
import {
  Routes,
  Router,
  RouterModule
} from '@angular/router';


export class MockRouter {
  navigate = jasmine.createSpy('navigate');
}

export class LocationMock {
  _platformStrategy = {
    getBaseHref() {
      return '/';
    }
  };
}

export class MockRedux extends NgRedux<any> {

  dispatch: () => {};

  constructor() {
    super(null);
  }
}

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SearchComponent,
        MovieListComponent,
        MovieCardComponent,
        NavbarComponent
      ],
      imports: [
        FormsModule,
        RouterModule,
      ],
      providers: [
        { provide: NgRedux, useClass: MockRedux },
        { provide: Router, useClass: MockRouter },
        { provide: Location, useClass: LocationMock },
        NgReduxRouter,
        LocationStrategy,
        SearchEpics
      ]
    });
  });

  // TODO: resolve all dependencies and re-enable
  xit('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
