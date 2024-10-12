<h1 align="center">Welcome to react_learning 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
  </a>
</p>

## Install

```sh
npm install
```

## Run tests

```sh
npm run test
```

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_

### packages needed for react using webpack
- react
- react-dom
- webpack
- babel-loader
- @babel/core & @babel/preset-react & @babel/preset-env

### Jest testing package

- install jest and update package.json file. 
- CMD - npm run test -- --watch mode
- create a file named [filename].test.js
- export and import ES5 modules, it won't support ES6

### Jest matchers

- toBe() - To test a value with exact equality
- toEqual() - To test a value with exact equality with object and Array

### Jest truthiness

- toBeNull - to check the value is null
- toBeDefined - to check the value is defined
- toBeUndefined - To check the value is undefined
- toBeTruthy- Matches if any true value comes
- toBeFalsy - Matches if any false values comes

### Numbers

- toBeGreaterThan(n) - expected value should be greater than n
- toBeGreaterThanOrEqual(n) - expected value either greater than or equal to n
- toBeLessThan(n) - expected value should be lesser than n
- toBeLessThanOrEqual(n) - expected value should be lesser or equal than n
- toBeCloseTo(n) - if expected value is floating there toBe won't work so use the close 
