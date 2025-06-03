import { ActionReducer, INIT, UPDATE } from '@ngrx/store';

export function storageMetaReducer<State>(reducer: ActionReducer<State>): ActionReducer<State> {
  return (state, action) => {
    if (action.type === INIT || action.type === UPDATE) {
      const savedState = localStorage.getItem('appState');
      if (savedState) {
        return JSON.parse(savedState);
      }
    }
    const newState = reducer(state, action);
    localStorage.setItem('appState', JSON.stringify(newState));
    return newState;
  };
}
