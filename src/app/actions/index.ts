import { Action } from 'redux';
import {SearchActions} from './search.actions';

export interface IPayloadAction extends Action {
  payload?: any;
}

export const ACTION_PROVIDERS = [ SearchActions ];
export { SearchActions };
