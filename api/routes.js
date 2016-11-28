const express = require('express');
const router = express.Router();
const DummyDb = require('./db').DummyDb;
let db = new DummyDb();

router.get('/films/search', function(req, res) {
  let querystring = req.query.querystring;
  let results = db.searchFilm(req.query.querystring);
  res.json({ results });  
});

router.get('/films/head', function(req, res) {
  let results = db.head(req.query.size);
  res.json({ results });  
});

module.exports = router;
