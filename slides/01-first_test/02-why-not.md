---
title: Problems that test frameworks solve
chapter: First Test
---

1. Better tests organization

    Where do I put my tests? How should I name them?
    Where do I look for tests that other people wrote?

2. Running subgroups of tests efficiently

    As the codebase grows, running all tests becomes slower. Good testing framework
    knows how to run the tests in parallel and can run only tests that match specific criteria
    (e.g. only the ones that depend on changed files)

3. Better ways to express expectations and better error messages

    ```plain
    Error: 2 + 2 must be 4
      at assert (mytest.js:3:7)
    ```

    What was the actual value?

4. Mocking

    What if your function depends on network, filesystem or other IO?
