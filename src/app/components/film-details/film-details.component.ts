import { Component, OnInit, Input } from '@angular/core';
import { IMovie } from '../../store/movie';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.sass']
})
export class FilmDetailsComponent implements OnInit {

  @Input()
  film: IMovie;

  constructor() { }

  ngOnInit() {
  }

}
