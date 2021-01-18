<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[travis-image]: https://api.travis-ci.org/nestjs/nest.svg?branch=master
[travis-url]: https://travis-ci.org/nestjs/nest
[linux-image]: https://img.shields.io/travis/nestjs/nest/master.svg?label=linux
[linux-url]: https://travis-ci.org/nestjs/nest
  

## Description

Articles manger task created using [nestjs](https://github.com/nestjs/nest) framework and [nestjsx](https://github.com/nestjsx/crud) CRUD wrapper

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## SWAGGER DOCS

> swagger docs could be found on:
> 
>  http://localhost:3000/docs/v1

## Docker

```bash
# Docker build images
$ docker compose build

# Docker up
$ docker compose up
```
## Filter
> filter articles by body
> 
> http://localhost:3000/article?filter=body||$cont||{value}
> 
> also all filters mentioned in swagger docs
