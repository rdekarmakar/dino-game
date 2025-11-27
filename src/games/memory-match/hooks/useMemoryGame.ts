import { useState, useEffect, useCallback } from 'react';
import { Card, MemoryGameState, Difficulty } from '../../../types';
import { dinosaurs, easyDinosaurs, mediumDinosaurs, hardDinosaurs } from '../data/dinosaurs';
import { shuffleArray } from '../../../utils/helpers';
import { MEMORY_GAME } from '../../../utils/constants';

export const useMemoryGame = (difficulty: Difficulty = 'medium') => {
  const [gameState, setGameState] = useState<MemoryGameState>({
    cards: [],
    flippedCards: [],
    matchedPairs: 0,
    moves: 0,
    time: 0,
    isGameStarted: false,
    isGameComplete: false,
    difficulty,
  });

  // Initialize game
  const initializeGame = useCallback(() => {
    let selectedDinos;
    switch (difficulty) {
      case 'easy':
        selectedDinos = easyDinosaurs;
        break;
      case 'medium':
        selectedDinos = mediumDinosaurs;
        break;
      case 'hard':
        selectedDinos = hardDinosaurs;
        break;
      default:
        selectedDinos = mediumDinosaurs;
    }

    // Create pairs of cards
    const cardPairs: Card[] = [];
    selectedDinos.forEach((dino, index) => {
      cardPairs.push({
        id: `${dino.id}-1`,
        dinosaurId: dino.id,
        isFlipped: false,
        isMatched: false,
      });
      cardPairs.push({
        id: `${dino.id}-2`,
        dinosaurId: dino.id,
        isFlipped: false,
        isMatched: false,
      });
    });

    // Shuffle cards
    const shuffledCards = shuffleArray(cardPairs);

    setGameState({
      cards: shuffledCards,
      flippedCards: [],
      matchedPairs: 0,
      moves: 0,
      time: 0,
      isGameStarted: false,
      isGameComplete: false,
      difficulty,
    });
  }, [difficulty]);

  // Start game
  const startGame = useCallback(() => {
    setGameState((prev) => ({ ...prev, isGameStarted: true }));
  }, []);

  // Flip card
  const flipCard = useCallback((cardId: string) => {
    setGameState((prev) => {
      // Don't flip if game is complete or card is already flipped/matched
      if (prev.isGameComplete) return prev;

      const card = prev.cards.find((c) => c.id === cardId);
      if (!card || card.isFlipped || card.isMatched) return prev;

      // Don't flip if already 2 cards are flipped
      if (prev.flippedCards.length >= 2) return prev;

      const newCards = prev.cards.map((c) =>
        c.id === cardId ? { ...c, isFlipped: true } : c
      );

      const newFlippedCards = [...prev.flippedCards, cardId];

      return {
        ...prev,
        cards: newCards,
        flippedCards: newFlippedCards,
        isGameStarted: true, // Auto-start on first flip
      };
    });
  }, []);

  // Check for match
  useEffect(() => {
    if (gameState.flippedCards.length === 2) {
      const [firstCardId, secondCardId] = gameState.flippedCards;
      const firstCard = gameState.cards.find((c) => c.id === firstCardId);
      const secondCard = gameState.cards.find((c) => c.id === secondCardId);

      if (firstCard && secondCard) {
        const isMatch = firstCard.dinosaurId === secondCard.dinosaurId;

        setTimeout(() => {
          setGameState((prev) => {
            // Re-find cards in current state to ensure we have latest data
            const currentFirstCard = prev.cards.find((c) => c.id === firstCardId);
            const currentSecondCard = prev.cards.find((c) => c.id === secondCardId);

            if (!currentFirstCard || !currentSecondCard) return prev;

            let newCards = prev.cards;
            let newMatchedPairs = prev.matchedPairs;

            if (isMatch) {
              // Mark cards as matched
              newCards = prev.cards.map((c) =>
                c.id === firstCardId || c.id === secondCardId
                  ? { ...c, isMatched: true, isFlipped: true }
                  : c
              );
              newMatchedPairs = prev.matchedPairs + 1;
            } else {
              // Flip cards back
              newCards = prev.cards.map((c) =>
                c.id === firstCardId || c.id === secondCardId
                  ? { ...c, isFlipped: false }
                  : c
              );
            }

            const totalPairs = newCards.length / 2;
            const isComplete = newMatchedPairs === totalPairs;

            return {
              ...prev,
              cards: newCards,
              flippedCards: [],
              matchedPairs: newMatchedPairs,
              moves: prev.moves + 1,
              isGameComplete: isComplete,
            };
          });
        }, MEMORY_GAME.FLIP_DELAY);
      }
    }
  }, [gameState.flippedCards, gameState.cards]);

  // Timer
  useEffect(() => {
    if (!gameState.isGameStarted || gameState.isGameComplete) return;

    const interval = setInterval(() => {
      setGameState((prev) => ({ ...prev, time: prev.time + 1 }));
    }, 1000);

    return () => clearInterval(interval);
  }, [gameState.isGameStarted, gameState.isGameComplete]);

  // Reset game
  const resetGame = useCallback(() => {
    initializeGame();
  }, [initializeGame]);

  return {
    gameState,
    initializeGame,
    startGame,
    flipCard,
    resetGame,
  };
};
