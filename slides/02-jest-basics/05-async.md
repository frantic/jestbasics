---
title: Async tests
---

JavaScript relies on callbacks in many cases and Jest supports testing asynchronous code

```javascript
describe('my async module', () => {
  it('supports callbacks', (done) => {
    setTimeout(done, 1000);
  });
});
```

Note the usage of `done` argument in the `it` function.

If your code uses promises (it should!) you can just return a promise from `it`. `async`/`await`
is also supported (if your project is properly configured to use the new syntax):

```javascript
describe('my async module', () => {
  it('supports promises', () => {
    return new Promise((resolve) => {
      setTimeout(resolve, 1000);
    })
  });

  it('supports async/await', async () => {
    await saveUser({...});
  });
});
```
