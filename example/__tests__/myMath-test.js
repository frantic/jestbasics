jest.dontMock('../myMath');

const myMath = require('../myMath');
const fetch = require('fetch');

describe('my math module', () => {
  // beforeAll(() => {
  //   console.log('This is executed before the test suite');
  // });

  // beforeEach(() => {
  //   console.log('This is executed before each testcase');
  // });

  it('adds two numbers', () => {
    expect(myMath.add(1, 1)).toEqual(2);
  });

  it('gets random number', () => {
    return myMath.randomNumber().then((number) => {
      expect(number).toEqual(42);
      expect(fetch).toBeCalled();
    });
  })
});
