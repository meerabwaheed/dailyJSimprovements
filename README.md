# Software Architecture

This repository demonstrates the two most common software architecture styles:

* **Monolithic Architecture**
* **Microservices Architecture**

## Monolithic Architecture

A **Monolithic Architecture** is a traditional approach where the entire application is built as a single codebase and deployed as one unit.

### Advantages

* Simple to develop
* Easy to deploy
* Suitable for small to medium-sized applications

### Disadvantages

* Entire application must be redeployed for changes
* Difficult to scale individual features
* Harder to maintain as the project grows

---

## Microservices Architecture

A **Microservices Architecture** divides an application into multiple small, independent services. Each service handles a specific business function and communicates with other services through APIs.

### Advantages

* Independent deployment
* Easier maintenance
* Scales individual services
* Better fault isolation

### Disadvantages

* More complex architecture
* Requires inter-service communication
* More infrastructure and monitoring

---

## Comparison

| Feature     | Monolithic                      | Microservices                 |
| ----------- | ------------------------------- | ----------------------------- |
| Codebase    | Single                          | Multiple small services       |
| Deployment  | Entire application              | Individual services           |
| Scalability | Whole application               | Specific service              |
| Development | Simpler                         | More complex                  |
| Maintenance | Harder as the application grows | Easier for large applications |
| Best For    | Small to medium projects        | Large enterprise applications |

---

## Rule to Remember

* **Monolithic** → One application containing everything.
* **Microservices** → Multiple independent services working together through APIs.
{
  "name": "Meerab",
  "age": 20
}
// Group an array of objects by a key
function groupBy(arr, key) {
  return arr.reduce((acc, item) => {
    const group = item[key];
    acc[group] = acc[group] || [];
    acc[group].push(item);
    return acc;
  }, {});
}

// Example usage
const orders = [
  { id: 1, status: "pending" },
  { id: 2, status: "shipped" },
  { id: 3, status: "pending" },
];

console.log(groupBy(orders, "status"));
// { pending: [...], shipped: [...] }
# Daily JS Learning Program

This repository automates daily JavaScript activity by appending topic comments to `daily-log.txt`, creating commits, and pushing to GitHub.

## Core Scripts setup
- `setup-fresh.js`: Fresh setup for a new repository (new history).
- `setup-dev.js`: Setup while keeping existing history.
- `daily-automation.js`: Main automation runner.
- `setup-schedule.js`: Configure Windows Task Scheduler for daily runs.
- `setup-git-alias.js`: Configure `git today` alias.
- `run-task-now.js`: Run automation immediately.
- `check-status.js`: Check scheduled task and log status.
- `activity-plan.js`: Generate a 30-day issue/PR/review plan and optional daily reminder schedule.
Here are the JavaScript concepts that matter most — especially for interviews or leveling up:

Core Language

Closures – functions retaining access to their outer scope's variables even after the outer function returns. Classic interview topic.
this binding – how it changes with regular functions, arrow functions, call/apply/bind, and method invocation.
Hoisting – var vs let/const, function declarations vs expressions, and the "temporal dead zone."
Scope & the scope chain – global, function, block scope (let/const introduced block scope).
Prototypal inheritance – __proto__, prototype, Object.create(), and how class syntax is sugar over this.

Async JavaScript

Event loop, call stack, microtask/macrotask queue – why setTimeout(fn, 0) runs after a Promise.then().
Promises – states (pending/fulfilled/rejected), chaining, Promise.all/allSettled/race/any.
async/await – syntactic sugar over promises; error handling with try/catch.
Callbacks – and why we moved away from callback hell.

Functions & Data

Higher-order functions – functions that take/return functions (map, filter, reduce).
Pure functions & immutability – no side effects, don't mutate inputs.
Currying & partial application.
Destructuring & spread/rest operators.
Array/object methods – map, filter, reduce, find, some/every, Object.entries/keys/values.

Types & Comparisons

Type coercion – == vs ===, truthy/falsy values.
Primitive vs reference types – value copy vs reference copy (objects/arrays mutate by reference).
null vs undefined.

Modern JS (ES6+)

Modules – import/export.
Template literals, optional chaining (?.), nullish coalescing (??).
Generators & iterators (function*, yield) – less common but shows up in advanced roles.

Memory & Performance

Garbage collection basics – reference counting, mark-and-sweep.
Debounce vs throttle – common in UI-heavy work.
Memory leaks – detached DOM nodes, forgotten timers/listeners.

Given you work across Angular and Node-ish tooling, closures, this, the event loop, and promises/async-await are the ones worth being rock-solid on — they trip people up most in code reviews and interviews alike.
