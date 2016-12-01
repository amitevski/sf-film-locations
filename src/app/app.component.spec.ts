/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { DebugElement, Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgRedux } from 'ng2-redux';
import { NgReduxRouter } from 'ng2-redux-router';
import { Location, LocationStrategy } from '@angular/common';
import {DetailEpics, SearchEpics} from './epics';
import { MdlModule } from 'angular2-mdl';
import {
  Routes,
  Router,
  RouterModule
} from '@angular/router';

@Component({
  selector: 'app-dummy-home',
  template: '<div></div>'
})
export class DummyhomeComponent { }

@Component({
  selector: 'app-dummy-detail',
  template: '<div></div>'
})
export class DummydetailComponent { }
const routes = [
  { path: 'films/:slug', component: DummydetailComponent },
  { path: '', component: DummyhomeComponent }
];

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
        RouterTestingModule,
        HttpModule,
        MdlModule,
        ReactiveFormsModule,
      ],
      providers: [
        { provide: NgRedux, useClass: MockRedux },
        NgReduxRouter,
        LocationStrategy,
        DetailEpics,
        SearchEpics
      ]
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
