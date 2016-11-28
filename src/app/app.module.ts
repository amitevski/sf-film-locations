import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {
  NgReduxModule,
} from 'ng2-redux';

import {
  routing,
  appRoutingProviders
} from './app.routing';

import { NgReduxRouter } from 'ng2-redux-router';
import { SearchActions } from './actions/search.actions';
import { SearchEpics } from './epics/search.epics';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { HomePageComponent } from './pages';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    MovieListComponent,
    MovieCardComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing,
    NgReduxModule.forRoot(),
  ],
  providers: [
    NgReduxRouter,
    appRoutingProviders,
    SearchEpics,
    SearchActions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
