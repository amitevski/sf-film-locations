import { Component, OnInit } from '@angular/core';
import { IMovie } from '../../store/movie/movie.types';
import { select } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.sass']
})
export class MovieListComponent implements OnInit {
  @select(['search', 'results']) movies$: Observable<IMovie[]>;

  constructor() {}

  ngOnInit() {
    // init first search onload
  }

}
