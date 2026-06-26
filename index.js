// index.js
console.log('Hello, World!');
console.log('This is the index.js file.');

// Types of Architecture
// 1. Monolithic Architecture
// 2. Microservices Architecture

// Microservices Architecture
// Microservices architecture is a software design where an application is
// divided into multiple small, independent services. Each service is
// responsible for a specific business function, has its own codebase,
// can have its own database, and can be developed, deployed, and scaled
// independently. The services communicate with each other using APIs
// (such as REST or gRPC) or messaging systems.

// Monolithic architecture
// Monolithic architecture is a traditional software design where an application is built as a single, unified unit, combining all components (UI, business logic, data access) into one large codebase and deployable artifact. This approach simplifies development and deployment for small applications but can lead to challenges in scalability, maintainability, and flexibility as the application grows in complexity.
console.log('Monolithic architecture combines all components into a single unit.');

// Monolithic Architecture

// Everything is inside one application.

// E-Commerce Application
// │
// ├── Login
// ├── Products
// ├── Orders
// ├── Payments
// ├── Notifications
// └── Database

// Microservices Architecture

// Each feature is its own service.

//                 Client
//                    |
//         ---------------------
//         |         |         |
//    User Service  Product Service
//         |              |
//    Order Service   Payment Service
//         |
// Notification Service

// Advantages of Microservices
// Easier to scale specific services.
// Independent deployment.
// Easier maintenance.
// Better fault isolation (one service failing doesn't necessarily stop the whole application).
// Different teams can work on different services simultaneously.
// Disadvantages of Microservices
// More complex architecture.
// Harder debugging and monitoring.
// Network communication adds latency.
// Requires service discovery, API gateways, and monitoring tools.
// More DevOps and infrastructure management.
