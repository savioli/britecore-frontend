# BriteCore FrontEnd

<div>
  <a href="https://github.com/vuejs/vue">
    <img src="https://img.shields.io/badge/Vue%203-Compliant-20b120.svg">
  </a> 
  <a href="https://github.com/eslint/eslint">
    <img src="https://img.shields.io/badge/lint-ESLint-0044ff.svg">
  </a>
  <a href="https://github.com/prettier/prettier">
    <img src="https://img.shields.io/badge/code%20style-Prettier-ff3300.svg">
  </a>
</div>

</br>

**This repository is part of **[BriteCore Hiring Project](https://github.com/savioli/britecore-hiring-project.git)**.**

It contains the base code for the **BriteCore FrontEnd**.

## Stack

This project is based on **[Vue.js 3](https://vuejs.org/)** and **[Node.js 14.16.0](https://nodejs.org/)** using **LTS** versions of each technology.  

## Getting Started

## Environments

The **Development Environment** runs in **Docker** orchestrated with **Docker Compose**.  

The **Production Environment** is orchestrated with **AWS CloudFormation** using **AWS ECS and Fargate**.  

## Code Quality

**ESLint** and **Prettier** were configured to enforce style guide and to perform static code analysis to identify problematic patterns also enforcing the **Vue 3 development guidelines**.

## Development Environment

To set up the development environment follow the steps of the guide below.

### Setting Up the Development Environment

To have the development environment running you will need **Docker** and **Docker Compose** installed.

### 1 Development Environment Initialization

Inside of **britecore-frontend**.

1. Build the Docker containers using:

```bash
docker-compose build
```

2. Install the **Node.js** modules using:

```bash
docker-compose run --rm vue npm install
```

3. Start the development environment using:

```bash
docker-compose up
```

The application will be running at [http://localhost:3000](http://localhost:3000).

## Common Commands

Here are some most frequently used commands used during the development process.

### Installs the packages
```
docker-compose run --rm vue npm install
```

### Compiles and hot-reloads for development
```
docker-compose run --rm vue npm run serve
```

### Compiles and minifies for production
```
docker-compose run --rm vue npm run build
```

### Run your unit tests
```
docker-compose run --rm vue npm run test:unit
```

### Run your end-to-end tests
```
docker-compose run --rm vue npm run test:e2e
```

### Lints and fixes files
```
docker-compose run --rm vue npm run lint
```

---

For more information do not hesitate to contact me with any additional questions or comments at **andre_savioli@hotmail.com**.
