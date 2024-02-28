import React, { useEffect } from 'react';
import { Stack } from '@mui/material';
import { Header } from './components/Header/Header';
import { GameContent } from './components/GameContent/GameContent';
import { useDispatch, useSelector } from 'react-redux';
import { Card, initGame } from './redux/cardSlice';
import { RootState } from './redux/rootReducer';
import { Dispatch } from 'redux';
import { findLowestTrumpCard } from './utils/utils';

const startGame = (
  dispatch: Dispatch,
  player: Card[] | null,
  computer: Card[] | null,
) => {
  dispatch(initGame());

  if (player && computer) {
    return findLowestTrumpCard(player, computer);
  }
};

export const App = () => {
  const { cards } = useSelector((state: RootState) => state);
  const {
    player,
    computer,
    whoMoves: { tern },
  } = cards;
  const dispatch = useDispatch();

  useEffect(() => {
    startGame(dispatch, player, computer);
  }, []);

  return (
    <Stack height="100vh">
      <Header tern={tern} />
      {cards && <GameContent />}
    </Stack>
  );
};
