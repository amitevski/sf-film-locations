import { detailReducer } from './detail.reducer';
import { INITIAL_STATE } from './detail.initial-state';
import { DetailActions } from '../../actions';
import { IFilmDetails } from './movie.types';

describe('counter reducer', () => {
  let initState: IFilmDetails;

  beforeEach(() => {
    initState = INITIAL_STATE;
  });

  it('should set hasError on FETCH_ERROR', () => {
    expect(initState.hasError).toEqual(false);
    const nextState = detailReducer(
      initState,
      { type: DetailActions.FETCH_ERROR });
    expect(nextState.hasError).toEqual(true);
  });

});
