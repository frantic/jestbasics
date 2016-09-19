---
title: Without framework
chapter: First Test
---
You don't need a framework to test your code.

```javascript
function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

assert(add(1, 1) === 2, '2 + 2 must be 4');
```
