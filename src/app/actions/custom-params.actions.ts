import { createAction, props } from '@ngrx/store';

export const loadCustomParamss = createAction(
  '[CustomParams] Load CustomParamss'
);

export const loadCustomParamssSuccess = createAction(
  '[CustomParams] Load CustomParamss Success',
  props<{ data: any }>()
);

export const loadCustomParamssFailure = createAction(
  '[CustomParams] Load CustomParamss Failure',
  props<{ error: any }>()
);
