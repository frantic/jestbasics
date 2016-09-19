---
title: Exercise
layout_data:
  description: |
    Implement the `add` function so that it passes the test
  assertion: |
    assert(true, "Dummy");
---
function add(a, b) {
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

assert(add(1, 1) === 2, '2 + 2 must be 4');
