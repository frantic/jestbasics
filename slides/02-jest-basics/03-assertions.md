---
title: Assertions
---
Jest uses Jasmine-style assertion functions:

```javascript
expect(value).toBe(something);
```

`expect` is a function that wraps your value into special object that can be used
to run matchers.

There are several useful matchers:

* `toBe` - compare 2 values using `===` operator
    (see Comparison operators in [JavaScript Basics][jsbasics]):

    ```javascript
    expect(2).toBe(2);   // OK
    expect({}).toBe({}); // FAIL
    ```

* `toEqual` - recursively compares two values, prints a nice diff when finds any differences
    ```
    expect({}).toEqual({});                     // OK
    expect({answer: 11}).toEqual({answer: 42}); // FAIL
    ```

* `toContain` - makes sure the array has the given item
    ```
    expect([1, 2, 3]).toContain(1); // OK
    expect([1, 2, 3]).toContain(4); // FAIL
    ```

* `toThrow` - checks if the given function throws error
    ```
    expect(() => { undefined() }).toThrow(); // OK
    expect(() => { }).toThrow();             // FAIL
    ```

* `not` - useful to inverse the expectation
    ```
    expect(2).not.toBe(4); // OK
    expect(2).not.toBe(2); // FAIL
    ```

[See full list of matchers](http://facebook.github.io/jest/docs/api.html#expect-value)
