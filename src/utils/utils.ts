import { Card } from '../redux/cardSlice';
import { COMPUTER, PLAYER } from '../constants/pleyers';

export const shuffleDeck = (deck: Card[]): Card[] => {
  const shuffledDeck = [...deck].sort(() => Math.random() - 0.5);
  const trumpCard = shuffledDeck[shuffledDeck.length - 1];
  trumpCard.isTrump = true;

  shuffledDeck.forEach((card) => {
    if (card.suit === trumpCard.suit) {
      card.isTrump = true;
    }
  });

  return shuffledDeck;
};

export const findLowestTrumpCard = (
  playerCard: Card[],
  computerCard: Card[],
): string => {
  const lowestTrump1: Card | null = playerCard.reduce(
    (lowest: Card | null, card: Card) =>
      card.isTrump && (!lowest || card.rank < lowest!.rank) ? card : lowest,
    null,
  );
  const lowestTrump2: Card | null = computerCard.reduce(
    (lowest: Card | null, card: Card) =>
      card.isTrump && (!lowest || card.rank < lowest!.rank) ? card : lowest,
    null,
  );

  switch (true) {
    case !lowestTrump1 && !lowestTrump2:
      return PLAYER;
    case !lowestTrump1:
      return COMPUTER;
    case !lowestTrump2:
      return PLAYER;
    case lowestTrump1!.rank < lowestTrump2!.rank:
      return PLAYER;
    case lowestTrump1!.rank > lowestTrump2!.rank:
      return COMPUTER;
    default:
      return PLAYER;
  }
};
