# Mindmund

A todo app using NodeJS, Express and Sequalize written in Typescript

## Installation

```bash
npm install
```

```bash
yarn
```

The build is done with a Gulp and this task can be started with

```bash
yarn build
```

Typescript is transpiled to Javascript in the /dist directory.

## Configure your database
This project uses a PostgreSQL databse. In the databaseconfig/config.json file the schema and the credentials can be set. This file can be generated from the config.json.example file in the repo.
The migrations are written in Javascript and can be found in the migrations folder. Run sequelize db:migrate to migrate your database schema.

## Run the project

```bash
yarn start
```

Your web server is now exposed at http://localhost:3000