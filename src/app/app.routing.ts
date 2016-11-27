import {
  Routes,
  RouterModule
} from '@angular/router';
import {SF_APP_ROUTES} from './app.routes';

const appRoutes: Routes = SF_APP_ROUTES;

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(appRoutes);
