# Clean Architecture Prototype on Frontend

[Versão em português](README.pt.md)

## Objective

The purpose of this project is to illustrate the application of the principles of Clean Architecture in a Front-end development context.

## Clean Architecture

With the use of a well-defined architecture, we can obtain a series of benefits, such as:

- A clear division between the business and infrastructure layers. This makes it possible to replace frameworks and libraries without impacting the business logic. For example, it is possible to switch from React to Vue.js or React Native, keeping the innermost layers of the application intact.
- Ease of implementing new features. New features can be integrated without affecting the deeper layers of the application, since the outer layers depend only on the interfaces defined in the business layer.
- Ease of performing unit tests. The adoption of a clean architecture simplifies the creation of unit tests, since the innermost layers of the application do not have external dependencies. This makes it easier to create mocks and allows for more comprehensive code coverage.

## Technologies

- [React](https://pt-br.reactjs.org/)
- [Redux](https://redux.js.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Material UI](https://material-ui.com/pt/)
- [Next.js](https://nextjs.org/)
- [Vitest](https://vitest.dev/)

## How to run

To run the project, just run the following commands:

```bash
# Install dependencies
$ yarn

# Run the project
$ yarn dev
```

And if you want to run the tests:

```bash
# Run tests
$ yarn test

# Analyze test coverage in code
$ yarn coverage
```

## Description

The project consists of a simple to-do list application, where the user can add, remove and list tasks.

The application was developed using the [Next.js](https://nextjs.org/) framework, which is a React framework focused on performance and SEO.

For the development of the interface, the [Material UI](https://material-ui.com/pt/) framework was used, which is a React component framework based on Material Design.

For the execution of the tests, the [Vitest](https://vitest.dev/) framework was used, which is a unit test framework for Javascript.

## Architecture

The architecture of the project was based on the concepts of Clean Architecture, where we have a clear separation between the business and infrastructure layers.

![Clean Architecture](https://miro.medium.com/v2/resize:fit:1400/0*iU9Ks05_GTtGh6zV.jpg)

### Outer Layer (Frameworks and Drivers)

It is the most external layer of the application and encompasses the user interface (UI). Here, we find the implementation of the React components, which are responsible for rendering the visual elements that interact with it.

### Interface Layer (Adapters)

The interface layer is responsible for implementing the contracts defined in the business layer. In this context, the interface layer covers the implementation of repositories and services, which communicate with the infrastructure layer.

In this context, two services were implemented:

- `ApiService`: responsible for communicating with the REST API.
- `StoreService`: responsible for managing the state of the application (which in this context is used redux).

### Business Layer (Use Cases)

The business layer is responsible for implementing the business rules of the application. In this layer, we have the implementation of use cases, which are responsible for orchestrating calls to services and repositories.

In this context, the use cases were implemented:

- Create task
- List tasks
- Remove task

### Domain Layer (Entities and Contracts)

The domain layer is responsible for implementing the entities and contracts of the application. Here are the entities, which represent the application data, as well as the contracts, which define the interfaces that will be implemented in the interface layer.

If you want to test the final result of the application, access the link: [https://to-do-list-clean-arch.vercel.app/](https://to-do-list-clean-arch.vercel.app/)
