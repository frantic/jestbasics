---
title: Snapshot testing
chapter: Jest Advanced
---

There is another matcher that we didn't cover in section 3.4 - `toMatchSnapshot()`.

You can pass any value into `expect(...).toMatchSnapshot()`. When the test runs for the first time,
Jest will pretty-print the value and store it in a special `snap` file and you'll see this in your
terminal output:

```
Snapshot Summary
 › 1 snapshot written in 1 test file
```

New file will be created in `__tests__/__snapshots__`. Snapshot files are expected to be checked
into source control and reviewers must take time to review snapshot files.

When you run the tests for the next time, Jest will make sure the snapshots match. In case they
don't you'll get an error. You can re-record snapshots using `jest -u` command.

## Use cases

Snapshot testing was introduced to address React/React Native testing, but can be applied to many
other record/replay scenarios.
