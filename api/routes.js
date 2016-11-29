const express = require('express');
const router = express.Router();
const DummyDb = require('./db').DummyDb;
const _ = require('lodash');
let db = new DummyDb();

router.get('/films/search', function(req, res) {
  let querystring = req.query.querystring;
  let results = db.searchFilm(req.query.querystring);
  res.json({ results });  
});

router.get('/films/:slug', (req, res) => {
  let film = db.filmDetailsFor(req.params.slug);
  let locations = db.locationsBy(film.locations || []);
  if (_.isEmpty(film) && _.isEmpty(locations)) return res.status(404).send();
  res.json({film, locations});
});

router.get('/films/head', function(req, res) {
  let results = db.head(req.query.size);
  res.json({ results });  
});

module.exports = router;
