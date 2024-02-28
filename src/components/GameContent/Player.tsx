import React from 'react';
import { Card } from '../../redux/cardSlice';
import { Stack } from '@mui/material';

interface PlayerProps {
  cards: Card[] | null;
  color: string;
}

export const Player: React.FC<PlayerProps> = ({ cards, color }) => {
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
          >
            {card?.suit} {card?.rank}
          </Stack>
        ))}
    </Stack>
  );
};
