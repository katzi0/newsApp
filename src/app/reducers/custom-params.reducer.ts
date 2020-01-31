import { Action, createReducer, on } from '@ngrx/store';
import { UserQuery } from '../types';
import { loadCustomParamss } from '../actions/custom-params.actions';


export const customParamsFeatureKey = 'customParams';

export interface State {
  currentUserQuery: UserQuery
}

export const initialState: State = {
  currentUserQuery: { category: '', country: { label: '', value: '' }, query: 'type query to select' }
};

const _customParamsReducer = createReducer(
  initialState,
  on(loadCustomParamss, state => ({
    ...state
  }))
);

export function customParamsReducer(state: State | undefined, action: Action) {
  return _customParamsReducer(state, action);
}
