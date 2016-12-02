/* tslint:disable:no-unused-variable */
import {
  async,
  ComponentFixture,
  TestBed,
  inject,
  tick,
  fakeAsync
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { NgRedux } from 'ng2-redux';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdlModule } from 'angular2-mdl';
import { SearchComponent } from './search.component';
import { SearchActions } from '../../actions/search.actions';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  // let mockSearch = jasmine.createSpy('search');
  class MockActions {
    search: (form) => void;
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchComponent],
      imports: [
        FormsModule,
        MdlModule,
        ReactiveFormsModule
      ],
      providers: [
        { provide: SearchActions, useClass: MockActions },
        NgRedux
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create form group', () => {
    expect(component.searchForm).toBeTruthy();
    expect(component.searchForm.contains('querystring')).toBeTruthy();
  });

  describe('onSubmit', () => {
    it('should dispatch search action when user hits enter',
      inject(
        [SearchActions],
        (mockActions: SearchActions) => {
          const querystring = '180';
          const form = {
            value:
            { querystring }
          };
          mockActions.search = jasmine.createSpy('search');
          component.onSubmit(form);
          expect(mockActions.search).toHaveBeenCalledWith(form.value.querystring);
        })
    );
  });

  describe('instant search', () => {
    it('should dispatch search action when querystring changes',
      fakeAsync(
        inject(
          [SearchActions],
          (mockActions: SearchActions) => {
            const querystring = '180';
            mockActions.search = jasmine.createSpy('search');
            component.searchForm.setValue({ querystring }, { emitEvent: true });
            tick(500);
            fixture.detectChanges();
            expect(mockActions.search).toHaveBeenCalledWith(querystring);
          })
      ));
  });

});
