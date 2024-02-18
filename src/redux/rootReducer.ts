import { combineReducers } from '@reduxjs/toolkit';
// Импортируй редукторы вашего приложения
// import someReducer from './someReducer';
import cardsReducer from './cardSlice';
import gameReducer from './gameSlice';

export const rootReducer = combineReducers({
  cards: cardsReducer,
  game: gameReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
