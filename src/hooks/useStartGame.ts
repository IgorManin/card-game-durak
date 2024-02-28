import { useDispatch } from 'react-redux';
import { initGame } from '../redux/cardSlice';
import { shuffleDeck } from '../utils/utils';
import { deckCard } from '../constants/deck';

export const useStartGame = () => {
  const dispatch = useDispatch();
  const deck = shuffleDeck(deckCard);
  dispatch(initGame(shuffleDeck(deckCard)));
};
