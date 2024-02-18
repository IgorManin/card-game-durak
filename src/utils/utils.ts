import { Card } from '../redux/cardSlice';

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

export const findLowestTrumpCard = (cards: Card[]): Card | undefined => {
  // Фильтруем карты, чтобы найти только козыри
  const trumps = cards.filter((card) => card.isTrump);

  // Если нет козырей, возвращаем undefined
  if (trumps.length === 0) {
    return undefined;
  }

  // Используем spread оператор и метод Math.min для поиска наименьшей козырной карты
  return trumps.reduce(
    (lowestCard, currentCard) =>
      currentCard.rank < lowestCard.rank ? currentCard : lowestCard,
    trumps[0],
  );
};
