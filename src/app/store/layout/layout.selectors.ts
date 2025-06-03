import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LayoutState } from './layout.reducer';

export const selectLayoutState = createFeatureSelector<LayoutState>('layout');

export const selectShowSecondTab = createSelector(
  selectLayoutState,
  state => state.showSecondTab
);

export const selectLeftWidth = createSelector(
  selectLayoutState,
  state => state.leftWidth
);
