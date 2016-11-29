const express = require('express');
const app = express();
const compression = require('compression')
const api = require('./api/routes');
const port = process.env.PORT || 3000;

app.use(compression());
app.use('/api', api);
app.use('/', express.static('dist'));
app.use('*', express.static('dist'));

app.listen(port, function () {
  console.log(`sf app listening on port ${port}!`);
});