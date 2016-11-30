import { browser, element, by } from 'protractor';

export class SfFilmLocationsPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getMovieCards() {
    return element.all(by.css('.sf-card-square'));
  }
}
