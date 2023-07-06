<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Description

A small example as to how to implement [Azure AD](https://azure.microsoft.com/en-us/products/active-directory) when it comes to [Nest](https://github.com/nestjs/nest) and [GraphQL](https://graphql.org/)

## Justification

GraphQL and AzureAD don't really like each other right now, because AzureAD is configured to work with REST when implemented with Passport in Nest.js. Because of this, some changes must be made to the class itself.

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## License

[MIT licensed](LICENSE).
