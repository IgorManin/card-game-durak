import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './rootReducer';

export const selectRootState = (state: RootState) => state;

export const selectCardState = createSelector(
  selectRootState,
  (rootState: RootState) => rootState.cards,
);

export const selectGameState = createSelector(
  selectRootState,
  (rootState: RootState) => rootState.game,
);
