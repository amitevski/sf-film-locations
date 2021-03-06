/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, Component } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule, provideRoutes } from '@angular/router';
import { Slug } from 'ng2-slugify';
import {Movie, IMovie} from '../../store/movie';
import { MdlModule } from 'angular2-mdl';

import { MovieCardComponent } from './movie-card.component';

@Component({
  selector: 'app-dummy-home',
  template: '<div></div>'
})
export class DummyhomeComponent { }

@Component({
  selector: 'app-dummy-detail',
  template: '<div></div>'
})
export class DummydetailComponent { }

const routes = [
  { path: 'films/:slug', component: DummydetailComponent },
  { path: '', component: DummyhomeComponent }
];


describe('MovieCardComponent', () => {
  let component: MovieCardComponent;
  let fixture: ComponentFixture<MovieCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MovieCardComponent, DummydetailComponent, DummyhomeComponent],
      imports: [
        RouterTestingModule,
        MdlModule,
        RouterModule
      ],
      providers: [
        { provide: Slug, useFactory: () => new Slug('default') },
        provideRoutes(routes),
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieCardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    component.movie = Movie.create({
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
    });
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

});
