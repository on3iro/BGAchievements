> DISCLAIMER: Work in progress

[![Build Status](https://travis-ci.org/on3iro/BGAchievements.svg?branch=master)](https://travis-ci.org/on3iro/BGAchievements)
[![Coverage Status](https://coveralls.io/repos/github/on3iro/BGAchievements/badge.svg?branch=master)](https://coveralls.io/github/on3iro/BGAchievements?branch=master)
[![Maintainability](https://api.codeclimate.com/v1/badges/8959184d99c4b024edf7/maintainability)](https://codeclimate.com/github/on3iro/BGAchievements/maintainability)
[![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

[![Slack](https://img.shields.io/badge/Slack-bgachievements.slack.com-blue.svg?style=flat-square)](https://bgachievements.slack.com/)

# BGAchievements (working title)

<!-- vim-markdown-toc GFM -->
* [Description](#description)
* [Basic Road Map](#basic-road-map)
    * [Prerequisite phase](#prerequisite-phase)
    * [MVP (Minimum Viable Product)](#mvp-minimum-viable-product)
    * [Beta](#beta)
* [FAQ](#faq)
    * [Will the app be free](#will-the-app-be-free)
    * [Is it done yet](#is-it-done-yet)
* [Contributing](#contributing)
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

<!-- vim-markdown-toc -->


## Description

BGAchievements is (or at this point in time rather "will be") a web application to craft, rate and
share achievement sets for your favorite board games.
Think of Steam achievements for board gaming.

This project is an endeavour of board game and web development enthusiasts.
Our goals are diving deeper into some of the intricacies of modern web development
as well as producing a lovable product we will be eventually able to use :)
All of our main contributors work in the tech industry and share a deep passion
for gaming and board games in particular.


## Basic Road Map

### Prerequisite phase

* [x] Determine initial feature set
* [ ] Create Mockups
* [ ] Create basic designs
* [ ] Create static prototype
* [ ] Create data model
* [ ] Create project baseline / dev / deployment workflow


### MVP (Minimum Viable Product)

> Scheduled for summer/autumn 2018

* [ ] User registration
* [ ] Creation of private achievement sets
* [ ] Achievement tracking and (hopefully) a satisfying unlocking experience (think of Hearthstone booster packs :smile:)
* [ ] Public hosting and starting an alpha phase


### Beta

> No schedule, yet.

* [ ] Sharing, rating, commenting of achievement sets
* [ ] Merging achievement sets
* [ ] Starring achievement sets
* [ ] Search through sets for specific games
* [ ] Currated sets (board game authors, offical sets etc.)
* [ ] Landing page showing latest and hottest achievement sets
* [ ] Managing game collections and sets per user
* [ ] Get list of games by connecting to the boardgamegeek api


## FAQ

### Will the app be free

> Yes. We hope to be able to maintain the app without subscription fees or any
additional costs attached to it.
> However depending on the success of the project server costs might increase
> so we will probably add a way to donate later down the road.


### Is it done yet

> TL'DR: No! :(
>
> Actually we are currently just starting out.


## Contributing

We are currently just starting out and need to "stabilize" our
development workflow. Therefore we will currently only take "light weight" contributions
marked with the label [help wanted](https://github.com/on3iro/BGAchievements/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22).
Later on we will probably start to open things up a bit and also make some
more technically advanced issues open for contribution.


### Installing / Getting started

To install all project dependencies simply run

```shell
npm i
```


### Developing

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
* Jest as testing framework
* normalize.css as CSS-reset


### Development commands

#### Dev-Server

To start the development server run:

```shell
npm start
```

This will start an instance of webpack-dev-server on `localhost:3000` as well as an instance of
json-server which provides a fake api on `localhost:8089`.
From then on the whole project will rebuild, run your JS files through the Flow type-checker and
lint your JS with standard whenever you save a file.

You can also run client and api separately by using the following commands:

```bash
npm run api
npm run client
```


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
npm run lint:js
```

or to autmatically fix issues if possible, run:

```shell
npm run lint:js:fix
```

To lint styled-components run

```bash
npm run lint:css
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
