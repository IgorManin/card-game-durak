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

export const moveCards = (
  state: any,
  cards: Card[],
  playerType: 'player' | 'computer',
) => {
  if (playerType === 'player') {
    if (state.player) {
      cards.forEach((card) => {
        state.player = state.player!.filter(
          (pCard: Card) => pCard.id !== card.id,
        );
      });
    }
  } else if (playerType === 'computer') {
    if (state.computer) {
      cards.forEach((card) => {
        state.computer = state.computer!.filter(
          (cCard: Card) => cCard.id !== card.id,
        );
      });
    }
  }
};

export const takeCards = (state: any, playerType: 'player' | 'computer') => {
  if (playerType === 'player') {
    if (state.player && state.cardsOnTheTable) {
      state.player = [...state.player, ...state.cardsOnTheTable];
    }
  } else if (playerType === 'computer') {
    if (state.computer && state.cardsOnTheTable) {
      state.computer = [...state.computer, ...state.cardsOnTheTable];
    }
  }

  state.cardsOnTheTable = null;
};

export const takeCardsFromDeck = (
  state: any,
  playerType: 'player' | 'computer',
  numberOfCards: number,
) => {
  if (playerType === 'player' && state.deck) {
    state.player = [...state.player!, ...state.deck.slice(0, numberOfCards)];
  } else if (playerType === 'computer' && state.deck) {
    state.computer = [
      ...state.computer!,
      ...state.deck.slice(0, numberOfCards),
    ];
  }

  if (state.deck) {
    state.deck = state.deck.slice(numberOfCards);
  }
};
