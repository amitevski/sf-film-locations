import { Routes } from '@angular/router';

import { HomePageComponent, DetailPageComponent } from './pages';

export const SF_APP_ROUTES: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'films/:slug',
    component: DetailPageComponent
  }
];
