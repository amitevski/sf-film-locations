/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MovieCardComponent } from './movie-card.component';

describe('MovieCardComponent', () => {
  let component: MovieCardComponent;
  let fixture: ComponentFixture<MovieCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieCardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    component.movie = {
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
    };
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should handle missing imdb entry', () => {
    component.movie = {
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
      'writer': 'Umarji Anuradha, Jayendra, Aarthi Sriram, & Suba '
    };
    fixture.detectChanges();
    expect(component).toBeTruthy();
    expect(component.poster()).toBe(component.DEFAULT_IMG);
  });
});
