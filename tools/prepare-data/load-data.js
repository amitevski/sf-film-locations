const request = require('superagent');
const _ = require('lodash');
const Throttle = require('superagent-throttle');
const utils = require('./utils');

const HOST = 'https://data.sfgov.org/resource';
const DATASET = 'wwmu-gmzc';
const SODA_TOKEN = process.env.SODA_TOKEN;
const OMDB_API_URL = 'http://www.omdbapi.com/';

let throttle = new Throttle({
  active: true,     // set false to pause queue
  rate: 5,          // how many requests can be sent every `ratePer`
  ratePer: 100,   // number of ms in which `rate` requests may be sent
  concurrent: 2     // how many requests can be sent concurrently
});


/**
 * get all film location entries from socrata api
 */
function allSocrataFilms(queryString) {
  return new Promise((resolve, reject) => {
    request.get(`${HOST}/${DATASET}.json`)
      .set('Accept', 'application/json')
      .set('X-App-Token', SODA_TOKEN)
      // .query({$q: queryString})
      .query({ $limit: 5000 })
      .end((err, res) => {
        if (err) return reject(err);
        resolve(res.body);
      });
  });
}

/**
 * change structure of socrata data
 * creates hashmap with movie names
 * and puts all locations into an array
 */
function groupFilmsByTitle(socrataArray) {
  let byTitle = _.groupBy(socrataArray, 'title');
  return _.mapValues(byTitle, (filmArray) => {
    let first = _.clone(filmArray[0]);
    first.locations = filmArray.map(film => film.locations);
    return first;
  });
}


/**
 * adds imdb id, rating and cover 
 */
function addImdbData(filmsByTitle) {
  console.log(`${Object.keys(filmsByTitle).length} film titles to fetch.`);
  return Promise.all(Object.keys(filmsByTitle).map(title => {
    return findImdbEntryBy(title);
  }))
    .then(responses => {
      responses.forEach(maybeImdbEntry => {
        if (maybeImdbEntry.Response === 'False') return;
        let film = filmsByTitle[maybeImdbEntry.Title];
        let imdbEntry = {
          imdbRating: maybeImdbEntry.imdbRating,
          imdbID: maybeImdbEntry.imdbID,
          Genre: maybeImdbEntry.Genre,
          Poster: maybeImdbEntry.Poster
        }
        if (film) film.imdb = imdbEntry;
      })
      return filmsByTitle;
    });
}

/**
 * find a single imdb entry from omdb api by title
 */
function findImdbEntryBy(title) {
  return new Promise((resolve, reject) => {
    request.get(OMDB_API_URL)
      .use(throttle.plugin())
      .query({ t: title })
      .query({ r: 'json' })
      .end((err, res) => {
        if (err) return reject(err);
        console.log(`.`);
        resolve(res.body);
      })
  })
}



// get all film-location entries from socrata
// group by film name and persist to db
// add imdb
// dump to json
allSocrataFilms()
  .then(groupFilmsByTitle)
  .then(addImdbData)
  .then(data => JSON.stringify(data, null, 2))
  .then(utils.saveJsonFile.bind(this, 'films-by-title'))
  .then(console.log)
  .catch(err => {
    console.log(`ERR: ${err}`);
  });



