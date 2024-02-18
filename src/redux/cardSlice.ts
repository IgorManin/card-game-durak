import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Card {
  id: number;
  suit: string;
  rank: number;
  isTrump: boolean;
}

interface CardsState {
  player: Card[] | null;
  computer: Card[] | null;
  deck: Card[] | null;
  cardsOnTheTable: Card[] | null;
}

const initialState: CardsState = {
  player: null,
  computer: null,
  deck: null,
  cardsOnTheTable: null,
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    initGame(state, action: PayloadAction<Card[]>) {
      const { payload } = action;
      state.player = payload.slice(0, 6);
      state.computer = payload.slice(6, 12);
      state.deck = payload.slice(12);
    },
  },
});

export const { initGame } = cardsSlice.actions;

export default cardsSlice.reducer;
