import { Component, Input, OnInit } from '@angular/core';
import { IMovie } from '../store/movie/movie.types';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.sass']
})
export class MovieCardComponent implements OnInit {

  @Input()
  movie: IMovie;

  constructor() { }

  ngOnInit() {
  }

  locationCount(): number {
    return this.movie.locations
      .filter(location => location !== null).length;
  }

}
