import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Slug} from 'ng2-slugify';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from 'angular2-google-maps/core';

import {
  NgReduxModule,
} from 'ng2-redux';

import {
  routing,
  appRoutingProviders
} from './app.routing';

import { NgReduxRouter } from 'ng2-redux-router';
import { SearchActions, DetailActions } from './actions';
import { SearchEpics, DetailEpics } from './epics';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { HomePageComponent, DetailPageComponent } from './pages';
import { LocationMapComponent } from './components/location-map/location-map.component';

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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing,
    NgReduxModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCv8-d2ul4jYyWSkvUESmAjB48NTNaVPyo'
    }),
  ],
  providers: [
    {provide: Slug, useFactory: () => new Slug('default') }, // angular cant figure out default params
    NgReduxRouter,
    appRoutingProviders,
    SearchEpics,
    DetailEpics,
    DetailActions,
    SearchActions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
