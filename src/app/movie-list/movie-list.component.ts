import { Component, OnInit } from '@angular/core';
// import {MovieCardComponent} from '../movie-card/movie-card.component';
import { IMovie } from '../store/movie/movie.types';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.sass']
})
export class MovieListComponent implements OnInit {
  movies: IMovie[];
  constructor() {
    this.movies = [{
      'actor_1': 'Siddarth',
      'actor_2': 'Nithya Menon',
      'actor_3': 'Priya Anand',
      'director': 'Jayendra',
      'locations': [
        'Epic Roasthouse (399 Embarcadero)',
        'Mason & California Streets (Nob Hill)',
        'Justin Herman Plaza',
        '200 block Market Street',
        'City Hall',
        'Polk & Larkin Streets',
        'Randall Museum',
        '555 Market St.'
      ],
      'production_company': 'SPI Cinemas',
      'release_year': '2011',
      'title': '180',
      'writer': 'Umarji Anuradha, Jayendra, Aarthi Sriram, & Suba ',
      'imdb': {
        'imdbRating': '6.0',
        'imdbID': 'tt1855110',
        'Genre': 'Drama, Romance',
        'Poster': 'http://ia.media-imdb.com/images/M/MV5BMTQ1NDExNTA5Ml5BMl5BanBnXkFtZTcwOTc3MjA2NQ@@._V1_SX300.jpg'
      }
    },
    {
      'actor_1': 'John Cusack',
      'actor_2': 'Kate Beckinsale',
      'director': 'Peter Chelsom',
      'distributor': 'Miramax Home Entertainment',
      'production_company': 'Miramax Films',
      'release_year': '2001',
      'title': 'Serendipity',
      'writer': 'Marc Klein',
      'locations': [
        null
      ],
      'imdb': {
        'imdbRating': '6.9',
        'imdbID': 'tt0240890',
        'Genre': 'Comedy, Romance',
        'Poster': 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTkzMjEzOTQ3Nl5BMl5BanBnXkFtZTYwMjI1NzU5._V1_SX300.jpg'
      }
    }];
  }

  ngOnInit() {
  }

}
