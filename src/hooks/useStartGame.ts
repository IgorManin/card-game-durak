import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/rootReducer';
import { shuffleDeck } from '../utils/utils';
import { initGame } from '../redux/cardSlice';
// import { COMPUTER, PLAYER } from '../constants/pleyers';
// import { updateWhoMoves } from '../redux/gameSlice';

export const useStartGame = () => {
  const dispatch = useDispatch();
  const { cards, game } = useSelector((state: RootState) => state);
  const { player, computer, deck } = cards;

  console.log('game', game);

  useEffect(() => {
    if (player && computer && deck) {
      const shuffledDeck = shuffleDeck(deck);

      dispatch(initGame(shuffledDeck));

      // const lowestTrumpPlayer = findLowestTrumpCard(player);
      // const lowestTrumpComputer = findLowestTrumpCard(computer);

      // if (lowestTrumpPlayer && lowestTrumpComputer) {
      //   const whoseTurn =
      //     lowestTrumpPlayer.rank < lowestTrumpComputer.rank ? PLAYER : COMPUTER;
      //   dispatch(updateWhoMoves(whoseTurn));
      // } else {
      //   dispatch(updateWhoMoves(COMPUTER)); // Первым ходит компьютер, если у пользователя нет козырных карт
      // }
    }
  }, [dispatch, player, computer, deck]);
  return {
    player,
    computer,
    deck,
  };
};
