import { Component } from '@angular/core';
import { IMovie, IAppState } from '../../store';
import { NgRedux } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-movie-list',
  templateUrl: 'movie-list.component.html',
  styleUrls: ['movie-list.component.sass']
})
export class MovieListComponent {
  movies$: Observable<IMovie[]>;
  querystring$: Observable<string>;
  hasError$: Observable<boolean>;

  constructor(private ngRedux: NgRedux<IAppState>) {
    this.movies$ = this.ngRedux.select(state => state.search.results);
    this.querystring$ = this.ngRedux.select(state => state.search.querystring);
    this.hasError$ = this.ngRedux.select(state => state.search.hasError);
  }

}
