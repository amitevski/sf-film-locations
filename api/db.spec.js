const DummyDb = require('./db').DummyDb;

describe('db', () => {
  let db = new DummyDb();

  describe('searchFilm', () => {
    it('should find all movies for 180', (done) => {
      // wait for files to load
      setTimeout(() => {
        expect(db.searchFilm('180').length).toBe(1);
        done();
      }, 300)
    });
  });

  describe('filmDetailsFor', () => {
    it('should get film by slug', (done) => {
      // wait for files to load
      setTimeout(() => {
        expect(db.filmDetailsFor('sister-act').title).toBe('Sister Act');
        done();
      }, 300)
    });
    it('should return {} if film is not found', (done) => {
      // wait for files to load
      setTimeout(() => {
        expect(db.filmDetailsFor('made-up-movie')).toEqual({});
        done();
      }, 300)
    });
  });

  describe('locationBy', () => {
    it('should get location by name', (done) => {
      // wait for files to load
      setTimeout(() => {
        expect(db.locationBy('Justin Herman Plaza').id).toBe('fd0b7c230c3b254734039cb2b8de74a88570a704');
        done();
      }, 300)
    });
    it('should return null if location is not found', (done) => {
      // wait for files to load
      setTimeout(() => {
        expect(db.locationBy('Justin Herman Plaza foo bar')).toBeNull();
        done();
      }, 300)
    });
  });

  describe('locationsBy', () => {
    it('should get locations by names as array', (done) => {
      // wait for files to load
      setTimeout(() => {
        let res = db.locationsBy(['Justin Herman Plaza', 'Justin Herman Plaza foo bar']);
        expect(res.length).toBe(1);
        expect(res[0].id).toBe('fd0b7c230c3b254734039cb2b8de74a88570a704');
        done();
      }, 300)
    });
  });

  describe('_createFilmsBySlug', () => {
    it('should create new object with slugified keys', () =>  {
      const a = {
        'My Fancy Movie title': {}
      };
      const expected = {
        'my-fancy-movie-title': {}
      };
      expect(db._createFilmsBySlug(a)).toEqual(expected);
    });
  });
})