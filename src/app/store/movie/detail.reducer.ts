import { IPayloadAction } from '../../actions';
import { DetailActions } from '../../actions/detail.actions';

import {
  INITIAL_STATE,
} from './detail.initial-state';


export function detailReducer(
  state = INITIAL_STATE,
  action: IPayloadAction) {

  switch (action.type) {
    case DetailActions.FETCH:
      return INITIAL_STATE;

    case DetailActions.FETCH_SUCCESS:
      return Object.assign({}, state, action.payload);

    case DetailActions.FETCH_ERROR:
      return INITIAL_STATE;

    default:
      return state;
  }
}