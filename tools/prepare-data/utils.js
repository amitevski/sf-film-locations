const crypto = require('crypto');
const fs = require('fs');

/**
 * create md5 from string
 */
function md5(data) {
  return crypto.createHash('md5').update(data).digest("hex");
}

/**
 * save data json file
 */
function saveJsonFile(filename, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(`${__dirname}/${filename}.json`, data, (err, success) => {
      if (err) return reject(err);
      resolve(`saved file`);
    });
  })
}

/**
 * load json from file
 */
function loadJson(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(`${__dirname}/${filename}.json`, (err, data) => {
      if (err) return reject(err);
      resolve(JSON.parse(data));
    });
  });
}

module.exports = {
  saveJsonFile,
  loadJson,
  md5
}
