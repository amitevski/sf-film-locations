import { SfFilmLocationsPage } from './app.po';

describe('sf-film-locations App', function() {
  let page: SfFilmLocationsPage;

  beforeEach(() => {
    page = new SfFilmLocationsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
