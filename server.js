const express = require('express');
const app = express();
const compression = require('compression')
const api = require('./api/routes');
const raven = require('raven');

const SENTRY_KEY = 'https://9145dfb8d5eb455082e27850ab90b83f:769940c3cee54a31bb9047201b597a46@sentry.io/118981';

const port = process.env.PORT || 3000;

function onError(err, req, res, next) {
    // The error id is attached to `res.sentry` to be returned
    // and optionally displayed to the user for support.
    res.statusCode = 500;
    res.end(res.sentry+'\n');
}

app.use(raven.middleware.express.requestHandler(SENTRY_KEY));

app.use(compression());
app.use('/api', api);
app.use('/', express.static('dist'));
app.use('*', express.static('dist'));

app.use(raven.middleware.express.errorHandler(SENTRY_KEY));
app.use(onError);

app.listen(port, function () {
  console.log(`sf app listening on port ${port}!`);
});