import { combineReducers } from '@reduxjs/toolkit';

import cardsReducer from './cardSlice';

export const rootReducer = combineReducers({
  cards: cardsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
