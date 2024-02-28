import React from 'react';
import { Card } from '../../redux/cardSlice';
import { Stack } from '@mui/system';

interface DeckProps {
  deck: Card[] | null;
  cardsOnTheTable: Card[] | null;
}

export const Deck: React.FC<DeckProps> = ({ deck, cardsOnTheTable }) => {
  return (
    <Stack direction="row" spacing={1} height={230} width={800}>
      {cardsOnTheTable &&
        cardsOnTheTable?.map((card, index) => (
          <div key={index}>
            <Stack direction="row" spacing={1}>
              <Stack height={170} width={100} border={1} margin={2}>
                {card?.suit} {card?.rank}
              </Stack>
            </Stack>
          </div>
        ))}
    </Stack>
  );
};
