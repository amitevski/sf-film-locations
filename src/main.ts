import './polyfills.ts';
// import '../node_modules/material-design-lite/material.js';
import '../node_modules/material-design-lite/src/mdlComponentHandler.js';
import '../node_modules/material-design-lite/src/layout/layout.js';
import '../node_modules/material-design-lite/src/textfield/textfield.js';
// import '../node_modules/material-design-lite/src/ripple/ripple.js';
import '../node_modules/material-design-lite/src/button/button.js';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
