import { SfFilmLocationsPage } from './app.po';

describe('sf-film-locations App', function() {
  let page: SfFilmLocationsPage;

  beforeEach(() => {
    page = new SfFilmLocationsPage();
  });

  it('should render page title correctly', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('SF Film Locations');
  });
});
