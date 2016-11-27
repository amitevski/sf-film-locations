/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MovieListComponent } from './movie-list.component';
import { MovieCardComponent } from '../movie-card/movie-card.component';

describe('MovieListComponent', () => {
  let component: MovieListComponent;
  let fixture: ComponentFixture<MovieListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MovieCardComponent,
        MovieListComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListComponent);
    component = fixture.componentInstance;
    component.movies = [
      {
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
      }
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
