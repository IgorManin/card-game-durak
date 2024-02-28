import React from 'react';
import { Stack } from '@mui/material';

import { Deck } from './Deck';
import { Player } from './Player';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/rootReducer';

const playerColor = ['red', 'green'];

export const GameContent = () => {
  const { player, computer, deck, cardsOnTheTable } = useSelector(
    (state: RootState) => state.cards,
  );

  return (
    <Stack
      height="90vh"
      bgcolor="aqua"
      justifyContent="center"
      alignItems="center"
    >
      <Player cards={player} color={playerColor[0]} />
      <Deck deck={deck} cardsOnTheTable={cardsOnTheTable} />
      <Player cards={computer} color={playerColor[1]} />
    </Stack>
  );
};
