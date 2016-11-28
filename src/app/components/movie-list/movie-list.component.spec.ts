/* tslint:disable:no-unused-variable */
import { async, inject, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MovieListComponent } from './movie-list.component';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { SearchActions } from '../../actions';
import { NgRedux } from 'ng2-redux';

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
