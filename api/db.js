const utils = require('../tools/prepare-data/utils');
const _ = require('lodash');
const Slug = require('ng2-slugify').Slug;

class DummyDb {

  constructor() {
    this._loadData();
    this.slug = new Slug('default');
  }

  /**
   * search in films array for given querystring
   * @param string querystring
   * @returns array of film entries
   */
  searchFilm(querystring) {
    return this.filmsByTitleArray
      .filter(film => film.title.toLowerCase().includes(querystring));
  }

  /**
   * @param number size
   * @returns first size number of films
   */
  head(size) {
    return this.filmsByTitleArray.slice(0, size);
  }

  /**
   * get single film by slug
   * @params string slug
   * @returns film object
   */
  filmDetailsFor(slug) {
    return this.filmsBySlug[slug] || {};
  }

  /**
   * @param string locationName
   * @returns location object from google api
   */
  locationBy(locationName) {
    return this.locations[locationName] || null;
  }

  /**
   * @param string[] locationNames
   * @returns location object[] from google api
   */
  locationsBy(locationNames) {
    // let result = {};
    return locationNames
      .filter(x => x !== null) // filter film.locations null values
      .map(location => this.locationBy(location))
      .filter(x => x !== null && x.geometry ); // filter not found
  }

  _loadData() {
    utils.loadJson('films-by-title')
      .then(data => {
        this.filmsByTitleArray = _.map(data, (val, key) => val);
        this.filmsBySlug = this._createFilmsBySlug(data);
        console.log(`loaded films by title ${this.filmsByTitleArray.length} films`);
      })
      .catch(console.error);
    utils.loadJson('locations')
      .then(data => {
        console.log(`loaded locations ${Object.keys(data).length}`);
        this.locations = data;
      })
      .catch(console.error);
  }

  _createFilmsBySlug(filmsByTitleObj) {
    let newObject = {};
    _.forEach(filmsByTitleObj, (val, key) => {
      newObject[this.slug.slugify(key)] = val;
    })
    return newObject;
  }
}



module.exports = {
  DummyDb
}