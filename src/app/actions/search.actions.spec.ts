import { NgRedux } from 'ng2-redux';
import { SearchActions } from './search.actions';

class MockRedux extends NgRedux<any> {

  dispatch: () => {};

  constructor() {
    super(null);
  }
}

describe('counter action creators', () => {
  let actions: SearchActions;
  let mockRedux: NgRedux<any>;

  beforeEach(() => {
    mockRedux = new MockRedux();
    actions = new SearchActions(mockRedux);
  });

  it('search should dispatch SEARCH Event with querystring as payload', () => {
    const querystring = '180';
    const expectedAction = {
      type: SearchActions.SEARCH,
      payload: querystring
    };

    spyOn(mockRedux, 'dispatch');
    actions.search(querystring);

    expect(mockRedux.dispatch).toHaveBeenCalled();
    expect(mockRedux.dispatch).toHaveBeenCalledWith(expectedAction);
  });

});
