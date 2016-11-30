import { searchReducer } from './search.reducer';
import { INITIAL_STATE } from './search.initial-state';
import { SearchActions } from '../../actions';
import { ISearch } from './search.types';

describe('counter reducer', () => {
  let initState: ISearch;

  beforeEach(() => {
    initState = INITIAL_STATE;
  });

  it('should set isSearching to true for SEARCH event', () => {
    expect(initState.isSearching).toEqual(false);
    const nextState = searchReducer(
      initState,
      { type: SearchActions.SEARCH, payload: 'test' });
    expect(nextState.isSearching).toEqual(true);
    expect(nextState.results).toEqual([]);
  });

  it('should save querystring state for SEARCH event', () => {
    expect(initState.isSearching).toEqual(false);
    const nextState = searchReducer(
      initState,
      { type: SearchActions.SEARCH, payload: 'test' });
    expect(nextState.querystring).toEqual('test');
    expect(nextState.results).toEqual([]);
  });

  it('should set results on SEARCH_SUCCESS', () => {
    expect(initState.results).toEqual([]);
    const results = [{title: '180'}];
    const nextState = searchReducer(
      initState,
      { type: SearchActions.SEARCH_SUCCESS, payload: results });
    expect(nextState.isSearching).toEqual(false);
    expect(nextState.results).toEqual(results);
  });

  it('should reset isSearching on SEARCH_ERROR', () => {
    const firstState = searchReducer(
      initState,
      { type: SearchActions.SEARCH, payload: 'test' });
    expect(firstState.isSearching).toEqual(true);
    const nextState = searchReducer(
      initState,
      { type: SearchActions.SEARCH_ERROR });
    expect(nextState.isSearching).toEqual(false);
  });

});
