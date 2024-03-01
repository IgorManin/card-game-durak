import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  findLowestTrumpCard,
  moveCards,
  shuffleDeck,
  takeCards,
  takeCardsFromDeck,
} from '../utils/utils';
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

    moveCardOnTheTable: (
      state,
      action: PayloadAction<{
        cards: Card[];
        playerType: 'player' | 'computer';
      } | null>,
    ) => {
      const cards = state.cardsOnTheTable ?? [];
      const payload = action.payload;

      if (payload) {
        state.cardsOnTheTable = [...cards, ...payload.cards] as Card[];
        moveCards(state, payload.cards, payload.playerType);
      }
    },

    takeCardsFromTheTable: (
      state,
      action: PayloadAction<{
        playerType: 'player' | 'computer';
      }>,
    ) => {
      const payload = action.payload;
      if (payload) {
        takeCards(state, payload.playerType);
      }
    },

    takeCardsFromTheDeck: (
      state,
      action: PayloadAction<{
        playerType: 'player' | 'computer';
        numberOfCards: number;
      }>,
    ) => {
      const payload = action.payload;
      if (payload) {
        takeCardsFromDeck(state, payload.playerType, payload.numberOfCards);
      }
    },
    removeCardsFomTable: (state) => {
      state.cardsOnTheTable = null;
    },

    updateWhoMoves: (state, action: PayloadAction<Partial<WhoMoves>>) => {
      state.whoMoves = { ...state.whoMoves, ...action.payload };
    },
  },
});

export const {
  initGame,
  updateWhoMoves,
  moveCardOnTheTable,
  takeCardsFromTheTable,
  removeCardsFomTable,
  takeCardsFromTheDeck,
} = cardsSlice.actions;

export default cardsSlice.reducer;
