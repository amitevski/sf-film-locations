import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Slug } from 'ng2-slugify';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { RavenErrorHandler } from './app.sentry';
import * as CONFIG from './app.config';
import { MdlModule } from 'angular2-mdl';
import { NgRedux } from 'ng2-redux';
import { createEpicMiddleware } from 'redux-observable';

import { IAppState, rootReducer } from './store';
import { middleware, enhancers } from './store';


import {
  NgReduxModule,
} from 'ng2-redux';

import {SF_APP_ROUTES} from './app.routes';

import { NgReduxRouter, NgReduxRouterModule } from 'ng2-redux-router';
import { SearchActions, DetailActions } from './actions';
import { SearchEpics, DetailEpics } from './epics';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { HomePageComponent, DetailPageComponent } from './pages';
import { LocationMapComponent } from './components/location-map/location-map.component';
import { FilmDetailsComponent } from './components/film-details/film-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    MovieListComponent,
    MovieCardComponent,
    HomePageComponent,
    DetailPageComponent,
    LocationMapComponent,
    FilmDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MdlModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(SF_APP_ROUTES),
    NgReduxModule.forRoot(),
    NgReduxRouterModule,
    AgmCoreModule.forRoot({
      apiKey: CONFIG.GOOGLE_API_KEY
    }),
  ],
  providers: [
    { provide: Slug, useFactory: slugFactory }, // angular cant figure out default params
    { provide: ErrorHandler, useClass: RavenErrorHandler },
    NgReduxRouter,
    // appRoutingProviders,
    SearchEpics,
    DetailEpics,
    DetailActions,
    SearchActions
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private ngRedux: NgRedux<IAppState>,
    private ngReduxRouter: NgReduxRouter,
    private detailEpics: DetailEpics,
    private searchEpics: SearchEpics) {

    middleware.push(createEpicMiddleware(this.searchEpics.search));
    middleware.push(createEpicMiddleware(this.detailEpics.fetch));

    ngRedux.configureStore(
      rootReducer,
      {},
      middleware,
      enhancers);

    ngReduxRouter.initialize();
    }
  
 }

export function slugFactory() {
  return new Slug('default');
}

