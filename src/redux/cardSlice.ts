import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { findLowestTrumpCard, shuffleDeck } from '../utils/utils';
import { deckCard } from '../constants/deck';

export interface Card {
  id: number;
  suit: string;
  rank: number;
  isTrump: boolean;
}

export interface WhoMoves {
  tern: string | null;
  isAttack: boolean;
}

interface CardsState {
  player: Card[] | null;
  computer: Card[] | null;
  deck: Card[] | null;
  cardsOnTheTable: Card[] | null;
  whoMoves: WhoMoves;
}

const initialState: CardsState = {
  player: null,
  computer: null,
  deck: null,
  cardsOnTheTable: null,
  whoMoves: { tern: null, isAttack: true },
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    initGame(state) {
      const cards = shuffleDeck(deckCard);
      state.player = cards.slice(0, 6);
      state.computer = cards.slice(6, 12);
      state.deck = cards.slice(12);
      state.whoMoves = {
        tern: findLowestTrumpCard(state.player, state.computer),
        isAttack: true,
      };
    },
    updateWhoMoves: (state, action: PayloadAction<Partial<WhoMoves>>) => {
      state.whoMoves = { ...state.whoMoves, ...action.payload };
    },
  },
});

export const { initGame, updateWhoMoves } = cardsSlice.actions;

export default cardsSlice.reducer;
