import { Component, Input } from '@angular/core';
import { IMovie } from '../../store/movie';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.sass']
})
export class FilmDetailsComponent {

  @Input()
  film: IMovie;

  constructor() { }

}
