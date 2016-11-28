import { Component, Input, OnInit } from '@angular/core';
import { IMovie } from '../../store/movie/movie.types';
import {Slug} from 'ng2-slugify';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.sass'],
})
export class MovieCardComponent implements OnInit {

  @Input()
  movie: IMovie;

  DEFAULT_IMG: string = `/assets/square.png`;

  constructor(private slug: Slug) { }

  ngOnInit() {
  }

  locationCount(): number {
    return this.movie.locations
      .filter(location => location !== null).length;
  }

  /**
   * returns imdb poster url
   * or DEFAULT_IMG as fallback
   */
  poster() {
    if (this.movie.imdb && this.movie.imdb.Poster && this.movie.imdb.Poster !== 'N/A') {
      return this.movie.imdb.Poster;
    }
    return this.DEFAULT_IMG ;
  }

  /**
   * slugify movie title
   */
  movieSlug() {
    return this.slug.slugify(this.movie.title);
  }

}
