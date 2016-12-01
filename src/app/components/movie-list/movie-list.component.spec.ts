/* tslint:disable:no-unused-variable */
import { async, inject, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, Component } from '@angular/core';

import { MovieListComponent } from './movie-list.component';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { SearchActions } from '../../actions';
import { NgRedux } from 'ng2-redux';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule, provideRoutes, Routes } from '@angular/router';
import { MdlModule } from 'angular2-mdl';

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

class MockRedux extends NgRedux<any> {

  dispatch: () => {};

  constructor() {
    super(null);
  }
}

class MockSearchActions extends SearchActions {

  constructor() {
    super(null);
  }

  search() {
    return 'foo';
  }
}

describe('MovieListComponent', () => {
  let component: MovieListComponent;
  let fixture: ComponentFixture<MovieListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MovieCardComponent,
        MovieListComponent
      ],
      imports: [
        RouterTestingModule,
        MdlModule,
        RouterModule
      ],
      providers: [
        { provide: SearchActions, useClass: MockSearchActions },
        { provide: NgRedux, useClass: MockRedux },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
