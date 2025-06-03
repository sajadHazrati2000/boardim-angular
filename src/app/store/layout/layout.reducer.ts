import { createReducer, on } from '@ngrx/store';
import { toggleSecondTab, setLeftWidth } from './layout.actions';

export interface LayoutState {
  showSecondTab: boolean;
  leftWidth: number;
}

export const initialState: LayoutState = {
  showSecondTab: true,
  leftWidth: 50,
};

export const layoutReducer = createReducer(
  initialState,
  on(toggleSecondTab, state => ({
    ...state,
    showSecondTab: !state.showSecondTab,
  })),
  on(setLeftWidth, (state, { width }) => ({
    ...state,
    leftWidth: width,
  }))
);
