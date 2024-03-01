import React from 'react';
import {
  Card,
  removeCardsFomTable,
  takeCardsFromTheDeck,
  takeCardsFromTheTable,
} from '../../redux/cardSlice';
import { Button, Stack } from '@mui/material';
import { useDispatch } from 'react-redux';

interface DeckProps {
  deck: Card[] | null;
  cardsOnTheTable: Card[] | null;
}

const cards = (cardsOnTheTable: Card[] | null) => {
  return cardsOnTheTable?.map((card, index) => (
    <div key={index}>
      <Stack height={170} width={100} border={1} margin={2}>
        {card?.suit} {card?.rank}
      </Stack>
    </div>
  ));
};

export const Deck: React.FC<DeckProps> = ({ deck, cardsOnTheTable }) => {
  const dispatch = useDispatch();
  const playingCards = cards(cardsOnTheTable);

  const takeCards = () => {
    dispatch(takeCardsFromTheTable({ playerType: 'player' }));
  };
  const removeCards = () => {
    dispatch(removeCardsFomTable());
  };

  const dealCards = () => {
    dispatch(takeCardsFromTheDeck({ playerType: 'player', numberOfCards: 2 }));
  };
  return (
    <Stack
      bgcolor="red"
      direction="column"
      spacing={1}
      height={230}
      width={800}
    >
      <Stack>{playingCards}</Stack>

      <Button variant="contained" onClick={takeCards}>
        Взять карты
      </Button>
      <Button variant="contained" onClick={removeCards}>
        Удалить карты
      </Button>
      <Button variant="contained" onClick={dealCards}>
        Раздать карты
      </Button>
    </Stack>
  );
};
