---
title: Lifecycle
---

Every test is executed in a sandbox to make sure the tests don't depend on the order.

If you need to add some setup/teardown logic, use `beforeEach`/`afterEach` and `beforeAll`/`afterAll`:

```javascript
describe('my math module', () => {
  beforeAll(() => {
    console.log('This is executed before the test suite');
  });

  beforeEach(() => {
    console.log('This is executed before each testcase');
  });

  it('adds two numbers', () => {
    expect(() => { undefined() }).toThrow()
  });
});

```

A common thing to do in `before*` callbacks is to initialize your testing subject and create common
mocks. The `after*` callbacks are sometimes used to check some post-conditions.
