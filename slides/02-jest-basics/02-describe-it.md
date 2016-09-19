---
title: Describe it
---

Each test file looks something like this:

```javascript
const MathModule = require('../myMath');   // 1

describe('my math module', () => {         // 2
  it('adds two numbers', () => {           // 3
    // Your testing code goes here
  });
});
```


1. Because we colocate tests with modules, it's easy to import them
2. Grouping tests with `describe` helps improve the structure and output of the tests.
    These can be nested.
3. `it` defines a single test. The description should be human-readable and it's nice if
    it makes a good English sentance: "it adds two numbers", "it renders friends list", etc.

To run the tests just execute `jest` from your command line:

<pre>
$ jest
<b><span style='color:#999'>Running 1 test suite...</span></b>
<b><span style='background-color:#0A0'> PASS </span></b> __tests__/<b>myMath-test.js</b>
  my math module
    <span style='color:#0A0'>✓ adds two numbers (2ms)</span>

<b>Test Summary</b>
 › Ran all tests.
<span style='color:#0A0'> › <b><span style='color:#0A0'>1 test passed </b></span>(1 total in 1 test suite, run time 0.826s)
</span></b>
</pre>
