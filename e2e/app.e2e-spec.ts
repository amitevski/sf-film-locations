import { SfFilmLocationsPage } from './app.po';

describe('sf-film-locations App', function () {
  let page: SfFilmLocationsPage;

  beforeEach(() => {
    page = new SfFilmLocationsPage();
  });

  it('should render page title correctly', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('SF Film Locations');
  });
  it('should render some search results on initial load', (done) => {
    page.navigateTo();
    page.getMovieCards().getWebElements()
      .then(elements => {
        expect(elements.length).toBeGreaterThan(1);
        done();
      });
  });
});
