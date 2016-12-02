[![Build Status](https://travis-ci.org/amitevski/sf-film-locations.svg?branch=master)](https://travis-ci.org/amitevski/sf-film-locations)
[![Code Climate](https://codeclimate.com/github/amitevski/sf-film-locations/badges/gpa.svg)](https://codeclimate.com/github/amitevski/sf-film-locations)

# SF Film Locations

## Overview

SF Film Locations is a small mobile-first web application where you can search for movies filmed in san francisco.
It also displays additional information fetched from [OMDb API](https://www.omdbapi.com) like Poster, Rating...
In the detail view in addition it displays a map with locations that could be geocoded with google maps API and a list of film locations with Google Maps Links.

[Try it](https://sf-film-location-search.herokuapp.com)


## Technology Stack

* [Angular 2](https://angular.io/) Single Page application
* [redux](http://redux.js.org/) for improved Data Flow and state management
* [express.js](http://expressjs.com/) backend service for API
* [node.js](https://nodejs.org) for preparing the data and Backend Service
* [Socrata API](https://data.sfgov.org/Culture-and-Recreation/Film-Locations-in-San-Francisco/yitu-d5am/data) film locations are fetched from this API
* [OMDb API](https://www.omdbapi.com) additional information on the films
* [Google Maps/Places API](https://developers.google.com/maps/documentation/javascript/places-autocomplete) for geocoding location data into the films
* [TravisCI](https://travis-ci.org/) for Continous Integration
* [Heroku](https://heroku.com/) for hosting
* [Code Climate](https://codeclimate.com) for code analysis and coverage reports
* [Sentry](https://sentry.io) to log client and server side errors


### Frontend
For the frontend a combination of Angular2 and redux was chosen written in TypeScript.
TypeScript simplifies the development by offering a nice auto completion and helps detecting errors earlier.
Angular2 enables a good structure by dividing the app into components.
It also has testability built in.
Redux helps to keep state management simple by strictly adhering the unidirectional data flow.
Currently the app is pretty small, but this is a good foundation if more features need to be added.

### Backend
As the main focus of this project is the Frontend part the backend is a simple but not so bad express.js app written in plain JavaScript.
It just offers an json REST API and loads the data from json files into memory.
This is reasonable currently as there are not many movies in the db.
In long term a dedicated DB should be used to also simplify scaling the app.

## Usage

### Perequisites
* node.js > 6

Run `npm install` in the root folder to install the dependencies.

### running the app
Run `npm start` for a prod server. Navigate to `http://localhost:3000/`.
The project has to be built before by running `ng build`, see details below.
You can override the default port by setting the `PORT` environment variable.


## Development and build process

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.21.

### Development server
Run `npm run dev` for a dev server. Navigate to `http://localhost:3000/`.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests


Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
Run `ng test --code-coverage true` to also generate coverage files in `coverage/index.html`.
Run `ng run test:server` to execute the unit for the expressjs server.

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng run dev`.

### Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



## Continous Integration Pipeline

### Travis CI
The project is built and tested on travis each time new code is pushed

### Heroku
On every successful build the app is deployed automatically to [heroku](https://sf-film-location-search.herokuapp.com).
See `.travis.yml` for details.
A very optimized [AOT](https://angular.io/docs/ts/latest/cookbook/aot-compiler.html) version of the frontend is deployed to the live server.

### Code Climate
After a successful build code is analyzed and a coverage report is sent to [code climate](https://codeclimate.com/github/amitevski/sf-film-locations).


## Updating the database

### fetching films from socrata

```bash
SODA_TOKEN=<your socrata key> node tools/prepare-data/load-data.js
``` 
this will produce the file `films-by-title.json`

### geocoding locations

```bash
GOOGLE_MAPS_KEY=<yourkey> node tools/prepare-data/geocode.js
``` 
this will produce the file `locations.json`

NOTE: Google has a limit of 2500 requests. So this step might fail.
See solution below in improvements section.


## Known issues

### Code Coverage reports are not correctly submitted
As a workaround they can be generated locally and viewed as html

## Possible improvements

### Data import
The import should be automated and only update new films to be production ready.
Currently it fetches all the data all the time. This would also solve the google maps request limit.

### UI
* Add some wizard on initial pageload that explains the user what the app is about
* Add footer with legal information
* Add about page
* Render the initial page on the server with angular-universal to speed up page-load time

### Server
Use a Database instead of storing json files.