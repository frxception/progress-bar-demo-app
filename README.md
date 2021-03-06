# Progress bars demo app with Angular 6, Angular CLI, Angular Material, Docker

> ### This project is created for a very important purpose :smiley:

## [SEE THE COOL DEMO](https://frxception.github.io/progress-bar-demo-app/)

## Getting started

**NOTICE**

> NO JQUERY WAS USED HERE :smiley:

1. Go to project folder and install dependencies.
 ```bash
 npm install
 ```

2. Launch development server:
 ```bash
 npm start
 ```



**Note**

> You can see more usage in package.json (for prod release you need to customize particulary for the baseURL or github sub-urls)

## Usage

Tasks                    | Description
-------------------------|---------------------------------------------------------------------------------------
npm i                    | Install dependencies
npm start                | Start the app in development mode
test-watch             | Run unit tests with karma and jasmine
npm run test:library     | Run unit tests for the library
npm run e2e              | Run end to end tests with protractor
npm run build            | Build the app for production
npm run deploy-prod-github   | Build and deploy to github
npm run lint             | Run the linter (tslint)
npm run lint    | Run the linter
npm run test-all               | Execute linter and unit tests and end-to-end testing
npm run deploy           | Build the app and deploy dist folder to Github pages (angular-cli-ghpages) (fork to do this and remove CNAME file)
npm run sme              | Build and run source map explorer, really cool :)
npm run release          | Create a new release using standard-version
npm run docker-local         | Build the docker image and run the container locally

## Features

* Using angular-svg-round-progressbar module
* Uglification / Minification
* Interceptors and Events 
* Responsive layout (flex layout module)
* SASS (most common used functions and mixins)
* I18n Internationalization
* Lazy loading modules
* Service Workers
* Dynamic Imports
* Modernizr (browser features detection)
* Github pages deploy ready
* ES6 Promises and Observables
* Unit tests with Jasmine and Karma including code coverage
* End-to-end tests using Protractor
* Basic docker integration

## Docker

Build the image and run the container with Docker and the configuration is in the nginx folder.

`docker build -t progressbarsapp .`

`docker run -d -p 4200:80 progressbarsapp`


## Continous Integration

I use Travis CI to run this tasks in order:
* Deploy in Github pages
* Linter
* Tests
* Build for production


## TODO
* Need to publish docker any cloud services
* Make the bars configurable
* Make the progress bar component as a module or as a reusable component
* Add more animation and colors to the bars

I had fun! Thank you :heart: