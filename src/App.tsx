import React from 'react';
import { Stack } from '@mui/material';
import { Header } from './components/Header/Header';
import { GameContent } from './components/GameContent/GameContent';
import { useStartGame } from './hooks/useStartGame';

export const App = () => {
  const { player, computer, deck } = useStartGame();

  console.log(player);
  console.log(computer);
  console.log(deck);

  return (
    <Stack height="100vh">
      <Header />
      <GameContent />
    </Stack>
  );
};
