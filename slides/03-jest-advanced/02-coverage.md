---
title: Coverage report
---

Run `jest --coverage` to see which lines of your project were actually executed during testing:

```plain
PASS  __tests__/myMath-test.js
 my math module
   ✓ adds two numbers (3ms)

-----------|----------|----------|----------|----------|----------------|
File       |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
-----------|----------|----------|----------|----------|----------------|
All files  |      100 |      100 |      100 |      100 |                |
 myMath.js |      100 |      100 |      100 |      100 |                |
-----------|----------|----------|----------|----------|----------------|
Test Summary
› Ran all tests.
› 1 test passed (1 total in 1 test suite, run time 0.922s)
```

Pro-tip: open `open coverage/lcov-report/index.html` for nice HTML report.
