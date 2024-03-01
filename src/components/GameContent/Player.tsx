import React from 'react';
import { Card, moveCardOnTheTable } from '../../redux/cardSlice';
import { Stack } from '@mui/material';
import { useDispatch } from 'react-redux';

interface PlayerProps {
  cards: Card[] | null;
  color: string;
}

export const Player: React.FC<PlayerProps> = ({ cards, color }) => {
  const dispatch = useDispatch();

  const makeMove = (card: Card[]) => {
    dispatch(moveCardOnTheTable({ cards: card, playerType: 'player' }));
  };

  return (
    <Stack direction="row">
      {cards &&
        cards.map((card) => (
          <Stack
            bgcolor={color}
            key={card.id}
            height={170}
            width={100}
            border={1}
            margin={2}
            onClick={() => makeMove([card])}
          >
            {card?.suit} {card?.rank}
          </Stack>
        ))}
    </Stack>
  );
};
