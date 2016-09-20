const fetch = require('fetch');
const Log = require('./logger');

function randomNumber() {
  Log.logToFile('About to get a random number');
  return fetch('https://random.org/number')
    .then((response) => response.text())
    .then((body) => Number(body));
}

function add(a, b) {
  return a + b;
}

module.exports.add = add;
module.exports.randomNumber = randomNumber;
