import { createAction, props } from '@ngrx/store';

export const toggleSecondTab = createAction('[Layout] Toggle Second Tab');

export const setLeftWidth = createAction(
  '[Layout] Set Left Width',
  props<{ width: number }>()
);
