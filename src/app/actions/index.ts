import { Action } from 'redux';
import { SearchActions } from './search.actions';
import { DetailActions } from './detail.actions';

export interface IPayloadAction extends Action {
  payload?: any;
}

export const ACTION_PROVIDERS = [SearchActions, DetailActions];
export { SearchActions, DetailActions };
