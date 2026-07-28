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
