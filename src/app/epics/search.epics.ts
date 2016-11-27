import { Injectable } from '@angular/core';
import { IPayloadAction, SearchActions } from '../actions';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
// import 'rxjs/add/observable/ofType';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/catch';


@Injectable()
export class SearchEpics {
  constructor() { }

  search = (action$: Observable<IPayloadAction>) => {
    return action$.filter(({ type }) => type === SearchActions.SEARCH)
      .mergeMap<IPayloadAction>(({ payload }) => {
        console.log(payload);
        // TODO: use angular fire
        return Promise.resolve(
          {
            type: SearchActions.SEARCH_SUCCESS,
            payload: [{
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
            }]
          });
        // return this.http.post(`${BASE_URL}/auth/login`, payload)
        //   .map(result => ({
        //     type: SearchActions.SEARCH_SUCCESS,
        //     payload: result.json().meta
        //   }))
        //   .catch(error => {
        //     return Observable.of({
        //       type: SearchActions.SEARCH_ERROR
        //     });
        //   });
      });
  }
}
