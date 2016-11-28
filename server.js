const express = require('express');
const app = express();
const compression = require('compression')
const api = require('./api/routes');

app.use(compression());
app.use('/api', api);
app.use('/', express.static('dist'));

app.listen(3000, function () {
  console.log('sf app listening on port 3000!');
});