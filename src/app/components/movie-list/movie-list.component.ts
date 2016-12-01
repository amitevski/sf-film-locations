import { Component } from '@angular/core';
import { IMovie } from '../../store/movie/movie.types';
import { select } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.sass']
})
export class MovieListComponent {
  @select(['search', 'results']) movies$: Observable<IMovie[]>;
  @select(['search', 'querystring']) querystring$: Observable<IMovie[]>;
  @select(['search', 'hasError']) hasError$: Observable<boolean>;

  constructor() { }

}
