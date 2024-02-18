import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface GameState {
  whoMoves: WhoMoves;
}

// Определение типа для объекта whoMoves
export interface WhoMoves {
  tern: string | null;
  isAttack: boolean;
}

// Начальное состояние
const initialState: GameState = {
  whoMoves: { tern: null, isAttack: true },
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    updateWhoMoves: (state, action: PayloadAction<Partial<WhoMoves>>) => {
      state.whoMoves = { ...state.whoMoves, ...action.payload };
    },
  },
});

export const { updateWhoMoves } = gameSlice.actions;
export default gameSlice.reducer;
