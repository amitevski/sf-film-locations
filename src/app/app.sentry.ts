import { ErrorHandler } from '@angular/core';
import * as Raven from 'raven-js';
import * as CONFIG from './app.config';

Raven
  .config(CONFIG.SENTRY_KEY)
  .install();

export class RavenErrorHandler implements ErrorHandler {
  handleError(err: any): void {
    Raven.captureException(err.originalError);
  }
}
