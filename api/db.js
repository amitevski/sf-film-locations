const utils = require('../tools/prepare-data/utils');
const _ = require('lodash');

class DummyDb {

  constructor() {
    this._loadData();
  }

  searchFilm(querystring) {
    return this.filmsByTitleArray
      .filter(film => film.title.toLowerCase().includes(querystring));
  }

  head(size) {
    return this.filmsByTitleArray.slice(0, size);
  }

  _loadData() {
    utils.loadJson('films-by-title')
      .then(data => {
        this.filmsByTitleArray = _.map(data, (val, key) => val );
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
}

module.exports = {
  DummyDb
}