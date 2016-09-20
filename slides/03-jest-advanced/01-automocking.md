---
title: Automocking
---

At Facebook we use Jest with automocking enabled by default. It makes it behave as `autobahn`
framework for Hack - i.e. mocking implementation of everything except the module that is
being tested.

This means that if your module depends on another module, its implementation will be mocked:

```javascript
// myMath.js
const fetch = require('fetch');
const Log = require('./logger');

function randomNumber() {
  Log.logToFile('About to get a random number');
  return fetch('https://random.org/number')
    .then((response) => response.text());
    .then((body) => Number(body));
}
```

By default Jest will try to guess the shape of the mocked module and replace the exported functions
by mocks. In the case with `logger` module it works great -- our `randomNumber` doesn't depend on
the return value of its function and uses it for side-effects.

However, in some cases you might want to create a custom mock for a module. In order to do that,
create a new file in special `__mocks__` folder:

```javascript
// __mocks__/fetch.js
module.exports = jest.fn(() => {
  return Promise.resolve({
    text: () => Promise.resolve('42')
  });
});
```

Then in your test file you can check that your module used your custom mock:

```
// __tests__/myMath-test.js
it('gets random number', () => {
  return myMath.randomNumber().then((number) => {
    expect(number).toEqual(42);
    expect(fetch).toBeCalled();
  });
});
```

To disable automocking for individual files, use

```javascript
jest.dontMock('../myMath');
```
