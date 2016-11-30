import { Movie } from './movie.types';

describe('movie types', () => {
  describe('Movie', () => {

    it('should filter locations with null', () => {
      let movie = Movie.create({
        'actor_1': 'Siddarth',
        'actor_2': 'Nithya Menon',
        'actor_3': 'Priya Anand',
        'director': 'Jayendra',
        'locations': [
          'Epic Roasthouse (399 Embarcadero)',
          'Mason & California Streets (Nob Hill)',
          null,
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
        imdb: {
          Poster: 'N/A',
          imdbRating: 'N/A',
          imdbID: 'N/A',
          Genre: 'N/A',
        }
      });
      expect(movie.locations.length).toBe(7);
    });

    describe('poster', () => {
      it('should handle missing imdb entry', () => {
        let movie = Movie.create({
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
        });
        expect(movie.poster()).toBe(movie.DEFAULT_IMG);
      });
      it('should handle string N/A in poster url', () => {
        let movie = Movie.create({
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
          imdb: {
            Poster: 'N/A',
            imdbRating: 'N/A',
            imdbID: 'N/A',
            Genre: 'N/A',
          }
        });
        expect(movie.poster()).toBe(movie.DEFAULT_IMG);
      });
      it('should return empty poster if withFallback is false', () => {
        let movie = Movie.create({
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
          imdb: {
            Poster: 'N/A',
            imdbRating: 'N/A',
            imdbID: 'N/A',
            Genre: 'N/A',
          }
        });
        expect(movie.poster(false)).toBe('');
      });
    });
  });
});
