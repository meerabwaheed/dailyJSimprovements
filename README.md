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
1. Print "Hello World"
console.log("Hello, World!");
2. Variables
let name = "Meerab";
const age = 22;
let isStudent = true;

console.log(name);
console.log(age);
console.log(isStudent);
3. If-Else Statement
let marks = 75;

if (marks >= 50) {
    console.log("Pass");
} else {
    console.log("Fail");
}
4. For Loop
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

Output:

1
2
3
4
5
5. While Loop
let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}
6. Function
function add(a, b) {
    return a + b;
}

let result = add(10, 20);
console.log(result);

Output:

30
7. Arrow Function
const multiply = (a, b) => {
    return a * b;
};

console.log(multiply(5, 4));

Output:

20
8. Arrays
let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits[0]);

fruits.push("Orange");

console.log(fruits);
9. Loop Through an Array
let numbers = [10, 20, 30, 40, 50];

numbers.forEach(function(number) {
    console.log(number);
});
10. Objects
let student = {
    name: "Meerab",
    age: 22,
    city: "Lahore"
};

console.log(student.name);
console.log(student.city);
11. User Input
let name = prompt("Enter your name:");

console.log("Welcome " + name);
12. Even or Odd
let number = 7;

if (number % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}
13. Find the Largest Number
let a = 10;
let b = 25;
let c = 15;

let largest = a;

if (b > largest) {
    largest = b;
}

if (c > largest) {
    largest = c;
}

console.log("Largest number is:", largest);
14. Sum of Array
let numbers = [10, 20, 30, 40];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log(sum);

Output:

100
15. Simple Calculator
function calculator(a, b, operator) {
    switch (operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b;
        default:
            return "Invalid Operator";
    }
}

console.log(calculator(20, 10, "+"));
console.log(calculator(20, 10, "-"));
console.log(calculator(20, 10, "*"));
console.log(calculator(20, 10, "/"));
4. Arithmetic Operators
let a = 10;
let b = 5;

console.log(a + b); // 15
console.log(a - b); // 5
console.log(a * b); // 50
console.log(a / b); // 2
console.log(a % b); // 0
5. If-Else Statement
let age = 18;

if (age >= 18) {
    console.log("You can vote.");
} else {
    console.log("You cannot vote.");
}
6. For Loop
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

Output

1
2
3
4
5
7. While Loop
let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}
8. Function
function greet(name) {
    return "Hello " + name;
}

console.log(greet("Meerab"));
9. Arrow Function
const add = (a, b) => {
    return a + b;
};

console.log(add(5, 7));

Or the short version:

const add = (a, b) => a + b;

console.log(add(5, 7));
10. Arrays
let fruits = ["Apple", "Banana", "Orange"];

console.log(fruits[0]);
console.log(fruits.length);

fruits.push("Mango");

console.log(fruits);
11. Loop Through an Array
let numbers = [10, 20, 30, 40];

for (let number of numbers) {
    console.log(number);
}
12. Objects
let student = {
    name: "Meerab",
    age: 22,
    city: "Lahore"
};

console.log(student.name);
console.log(student.age);
13. Array Methods
let numbers = [1, 2, 3, 4, 5];

numbers.forEach(num => {
    console.log(num);
});
14. Map Method
let numbers = [1, 2, 3];

let doubled = numbers.map(num => num * 2);

console.log(doubled);

Output

[2, 4, 6]
15. Filter Method
let numbers = [10, 15, 20, 25, 30];

let result = numbers.filter(num => num >= 20);

console.log(result);

Output

[20, 25, 30]
16. DOM Manipulation

HTML

<p id="text">Hello</p>
<button onclick="changeText()">Click Me</button>

JavaScript

function changeText() {
    document.getElementById("text").innerHTML = "Welcome to JavaScript!";
}
17. Event Listener
<button id="btn">Click Me</button>
const button = document.getElementById("btn");

button.addEventListener("click", () => {
    alert("Button Clicked!");
});
18. Fetch API
fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
19. Async/Await
async function getUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

getUsers();
20. Mini Project (Number Guessing)
const secret = 7;

let guess = Number(prompt("Guess a number (1-10):"));

if (guess === secret) {
    alert("Correct!");
} else {
    alert("Wrong! The correct number was " + secret);
}
Recommended Learning Order
Variables (let, const)
Data Types
Operators
If/Else
Loops
Functions
Arrays
Objects
DOM Manipulation
Events
ES6 Features (Arrow Functions, Destructuring, Spread)
Array Methods (map, filter, reduce)
Fetch API
Async/Await
Modules
Projects
1. Variables

Variables store data.

let name = "Meerab";
let age = 22;
const country = "Pakistan";

console.log(name);
console.log(age);
console.log(country);
Difference
let city = "Lahore";
city = "Islamabad"; // Allowed

const pi = 3.14;
// pi = 3.15 ❌ Error
let → Value can change.
const → Value cannot change.
2. Data Types
let username = "Ali";      // String
let age = 20;              // Number
let isStudent = true;      // Boolean
let marks = null;          // Null
let address;               // Undefined
3. Operators
Arithmetic
let a = 10;
let b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
Comparison
console.log(10 > 5);     // true
console.log(10 < 5);     // false
console.log(10 == "10"); // true
console.log(10 === "10");// false

Use === because it checks both value and type.

4. If-Else
let age = 18;

if (age >= 18) {
    console.log("You can vote.");
} else {
    console.log("You cannot vote.");
}
5. Loops
For Loop
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

Output

1
2
3
4
5
Is Node.js installed?

Open the terminal in VS Code (`Ctrl + ``) and run:

node -v

If you see something like:

v22.18.0

then Node.js is installed.

If you get:

'node' is not recognized...

then install Node.js from its official website and restart VS Code.
// Array utilities
const arrayUtils = {
  // Remove duplicates
  unique: (arr) => [...new Set(arr)],

  // Chunk array into smaller groups
  chunk: (arr, size) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  },

  // Group by a key
  groupBy: (arr, key) =>
    arr.reduce((acc, item) => {
      const group = typeof key === 'function' ? key(item) : item[key];
      (acc[group] = acc[group] || []).push(item);
      return acc;
    }, {}),

  // Flatten nested arrays
  flatten: (arr) => arr.flat(Infinity),
};

// String utilities
const stringUtils = {
  // Capitalize first letter
  capitalize: (str) => str.charAt(0).toUpperCase() + str.slice(1),

  // Convert to slug (e.g. for URLs)
  slugify: (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-'),

  // Truncate with ellipsis
  truncate: (str, maxLength) =>
    str.length > maxLength ? str.slice(0, maxLength).trim() + '...' : str,

  // Reverse string
  reverse: (str) => str.split('').reverse().join(''),
};
let day = 2;

switch(day){
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    default:
        console.log("Invalid");
}
