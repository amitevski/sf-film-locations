import { Component, Input } from '@angular/core';
import { IMovie } from '../../store';


@Component({
  selector: 'app-movie-card',
  templateUrl: 'movie-card.component.html',
  styleUrls: ['movie-card.component.sass'],
})
export class MovieCardComponent {

  @Input()
  movie: IMovie;

  constructor() { }

}
