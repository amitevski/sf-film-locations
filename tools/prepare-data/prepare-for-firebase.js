const utils = require('./utils');
const _ = require('lodash');


function hashKeys(fileName) {
  utils.loadJson(fileName)
    .then(data => {
      let newObject = {};
      _.forEach(data, (val, key) => {
        newObject[utils.md5(key)] = val;
      })
      return newObject;
    })
    .then(data => JSON.stringify(data, null, 2))
    .then(utils.saveJsonFile.bind(this, `${fileName}-firebase`))
    .then(console.log)
    .catch(console.error);
}


hashKeys('films-by-title');
hashKeys('locations');



