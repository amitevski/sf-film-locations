[![Build Status](https://travis-ci.org/amitevski/sf-film-locations.svg?branch=master)](https://travis-ci.org/amitevski/sf-film-locations)

# SF Film Locations

## Overview

SF Film Locations is a small mobile-first web application where you can search for movies filmed in san francisco.
It also displays additional information fetched from [OMDb API](https://www.omdbapi.com) like Poster, Rating...
In the detail view it should either display a map if enough information is available or just a list of film locations with Google Maps 
Links.

ALPHA: App currently not functional

## Technology Stack

* [Angular 2](https://angular.io/) Single Page application
* [redux](http://redux.js.org/) for improved Data Flow and state management
* [Firebase](https://firebase.google.com/) as Database so the app can be serverless
* [node.js](https://nodejs.org) for preparing the data
* [Socrata API](https://data.sfgov.org/Culture-and-Recreation/Film-Locations-in-San-Francisco/yitu-d5am/data) film locations are fetched from this API
* [OMDb API](https://www.omdbapi.com) additional information on the films
* [Google Maps/Places API](https://developers.google.com/maps/documentation/javascript/places-autocomplete) for geocoding location data into the films


## Perequisites
* node.js > 6

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

### preparing data for firebase

As firebase can't handle object keys with spaces or special chars they are hashed with md5.

```bash
node tools/prepare-data/prepare-for-firebase.js
```

The resulting json files can then be uploaded with the firebase web ui.

### improvements
The above commands should be automated and only update new films.
Currently it fetches all the data all the time. This would also solve the google maps request limit.

## tbd: running the app


# Development and build process

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.21.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests


Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
