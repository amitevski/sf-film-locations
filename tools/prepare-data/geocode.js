const request = require('superagent');
const _ = require('lodash');
const Throttle = require('superagent-throttle');
const utils = require('./utils');

const GOOGLE_MAPS_KEY = process.env.GOOGLE_MAPS_KEY
const GOOGLE_MAPS_AUTOCOMPLETE_API_URL = `https://maps.googleapis.com/maps/api/place/queryautocomplete/json`;
const GOOGLE_MAPS_PLACE_API_URL = `https://maps.googleapis.com/maps/api/place/details/json`;

let googleRequestCount = 0;

let throttle = new Throttle({
  active: true,     // set false to pause queue
  rate: 5,          // how many requests can be sent every `ratePer`
  ratePer: 500,   // number of ms in which `rate` requests may be sent
  concurrent: 1     // how many requests can be sent concurrently
});

/**
 * extract locationNames from filmsByTitle json objects
 */
function extractLocations(filmsByTitle) {
  return _.uniq(_.flatMap(filmsByTitle, film => film.locations.filter(location => location !== null)));
}

/**
 * fetch location data from google api for all given locationNames
 */
function fetchLocationData(locationNames) {
  console.log(`fetching ${locationNames.length} locations`);
  return Promise.all(locationNames.map(_findPlaceIdFor))
    .then(placeIds => Promise.all(placeIds.map(_fetchPlaceByPlaceId)))
    .then(places => _formatResult(places, locationNames))
}

/**
 * return object by locationName
 */
function _formatResult(places, locationNames) {
  let result = {};
  for (let i = 0; i < places.length; i++) {
    let place = places[i];
    if (place && place.address_components) delete place.address_components;
    result[locationNames[i]] = place;
  }
  return result;
}

/**
 * find google place_id by location name using google autocomplete api
 * naive approach takes the first place_id result by google
 */
function _findPlaceIdFor(locationName) {
  return _findAllLocationsBy(locationName)
    .then(predictions => {
      if (predictions.length <= 0) return null;
      return predictions[0].place_id;
    });
}

/**
 * fetch single place by id from google maps api
 */
function _fetchPlaceByPlaceId(placeId) {
  return new Promise((resolve, reject) => {
    request.get(GOOGLE_MAPS_PLACE_API_URL)
      .use(throttle.plugin())
      .query({ key: GOOGLE_MAPS_KEY })
      .query({ placeid: placeId })
      .end((err, res) => {
        ++googleRequestCount;
        console.log(googleRequestCount);
        if (err || res.body.error_message) {
          console.error(`ERR PLACE API: skipping ${err || res.body.error_message}`);
          return resolve({});
        }
        resolve(res.body.result || {});
      })
  });
}

/**
 * find locations fuzzy by using autocomplete api
 */
function _findAllLocationsBy(locationName) {
  let input = locationName.replace(/\s/g, '+');
  return new Promise((resolve, reject) => {
    request.get(GOOGLE_MAPS_AUTOCOMPLETE_API_URL)
      .use(throttle.plugin())
      .query({ key: GOOGLE_MAPS_KEY })
      .query({ input: `${input}+near+san+francisco+ca` })
      .query({ radius: 10000 })
      .end((err, res) => {
        ++googleRequestCount;
        console.log(googleRequestCount);
        if (err || res.body.error_message) {
          console.error(`ERR AUTOCOMPLETE: skipping ${err || res.body.error_message}`);
          return resolve([]);
        };
        // only consider predictions with a place id
        resolve(res.body.predictions.filter(prediction => prediction.place_id));
      })
  });
}


utils.loadJson('films-by-title')
  // .then(locationObj => {
  //   return {
  //     180: locationObj[180],
  //     "24 Hours on Craigslist": locationObj["24 Hours on Craigslist"]
  //   }
  // })
  .then(extractLocations)
  .then(fetchLocationData)
  .then(data => JSON.stringify(data, null, 2))
  .then(utils.saveJsonFile.bind(this, 'locations'))
  .then(console.log)
  .catch(err => {
    console.error(`ERR: ${err}`);
    process.exit(1);
  });
