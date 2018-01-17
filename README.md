[![Build Status](https://travis-ci.org/on3iro/BGAchievements.svg?branch=master)](https://travis-ci.org/on3iro/BGAchievements)
[![Coverage Status](https://coveralls.io/repos/github/on3iro/BGAchievements/badge.svg?branch=master)](https://coveralls.io/github/on3iro/BGAchievements?branch=master)

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)


# ToC

<!-- vim-markdown-toc GFM -->

* [BGAchievements](#cookiecutterproject_name)
* [Installing / Getting started](#installing--getting-started)
* [Developing](#developing)
    * [Built With](#built-with)
    * [Development commands](#development-commands)
        * [Dev-Server](#dev-server)
        * [Type-Checker (Flow)](#type-checker-flow)
            * [Required module not found](#required-module-not-found)
        * [Linters](#linters)
        * [Testing](#testing)
    * [Building](#building)
    * [CI](#ci)
* [Versioning](#versioning)
* [Style guide](#style-guide)

<!-- vim-markdown-toc -->


## BGAchievements

Master your games...


## Installing / Getting started

To install all project dependencies simply run

```shell
npm i
```


## Developing

### Built With

This project includes quite a few opinionated settings which where
made according to our own guidelines. Therefore this template includes:

* React as view-library
* Redux for state management
* Redux-loop for sideeffects
* Reselect for selector memoization
* Styled-components for component level CSS styling
* Axios for request handling
* Webpack as module bundler, dev server and build tool
* Babel for ES6 and Flow transpilation
* Flow as type-checker
* Standard as JS linter
* CSS-Autoprefixing via postcss
* Jest as testing framework
* normalize.css as CSS-reset


### Development commands

#### Dev-Server

To start the development server run:

```shell
npm start
```

This and start an instance of webpack-dev-server as well as an instance of
a json-server which provides a fake api.
From then on the whole project will rebuild, run your JS files through the Flow type-checker and
lint your JS with standard whenever you save a file.


#### Type-Checker (Flow)

To separately type-check your JS-files, run:

```shell
npm run flow
```

##### Required module not found

To add third party library flow support use [flow-typed](https://github.com/flowtype/flow-typed).

If the library of your choice does not support flow, you can add
an entry to `flow-typed/libDefs.js`. The declaration should look like this:

```javascript
declare module 'myModule' {
  declare module.exports: any
}
```

If a local module is not resolved correctly you can add an option to
the `.flowconfig` like so:

```bash
[options]
module.system.node.resolve_dirname=src
```

#### Linters

To separately lint your JS-files, run:

```shell
npm run lint
```

or to autmatically fix issues if possible, run:

```shell
npm run lint:fix
```


#### Testing

Tests should usually live next to their base files and should
be named like: `<myBaseFile>.test.js`.

To run Jest an check if your tests pass invoke:

```shell
npm run test
```

To run jest and generate coverage, run:

```shell
npm run test:coverage
```

To view the coverage files inside your browser, open the `index.html` inside
`coverage/lcov-report/`.

To continuously run Jest and have Jest watch for changes, run:

```shell
npm run test:watch
```


### Building

To build the project, run:

```shell
npm run build
```

This will compile, minify and bundle
everything and put all packaged files into the _dist/_ directory (if there is no such directory it will just be newly created, an existing directory will be removed first).
To allow our clients browsers to cache vendor files and only update the cache when it is really necessary, all important filenames include hashes for reference inside the built manifest file.


### CI

This project already includes a default _.gitlab-ci.yml_.
Just configure the file to your needs.


## Versioning

We use [SemVer](http://semver.org/) for versioning.


## Style guide

4so-Guidelines [v1.2.2](http://gitlab.4so.local/fourseasons/guidelines/tree/v1.2.2)
