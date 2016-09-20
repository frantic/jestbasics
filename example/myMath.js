const fetch = require('fetch');

function randomNumber() {
  return fetch('https://random.org/number')
    .then((response) => response.text())
    .then((body) => Number(body));
}

function add(a, b) {
  return a + b;
}

module.exports.add = add;
module.exports.randomNumber = randomNumber;
