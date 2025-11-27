import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Card as CardType, Difficulty } from '../../../types';
import { MemoryCard } from './Card';
import { MEMORY_GAME } from '../../../utils/constants';
import { spacing } from '../../../theme';

interface GameBoardProps {
  cards: CardType[];
  onCardPress: (cardId: string) => void;
  difficulty: Difficulty;
  disabled?: boolean;
}

const { width, height } = Dimensions.get('window');

export const GameBoard: React.FC<GameBoardProps> = ({
  cards,
  onCardPress,
  difficulty,
  disabled,
}) => {
  const gridSize = MEMORY_GAME.GRID_SIZES[difficulty.toUpperCase() as keyof typeof MEMORY_GAME.GRID_SIZES];
  const { rows, cols } = gridSize;

  // Calculate card size based on screen width and grid
  const cardMargin = spacing.xs;
  const boardPadding = spacing.md * 2;
  const availableWidth = width - boardPadding;
  const availableHeight = height - 250; // Reserve space for header and score panel

  // Calculate optimal card size based on both width and height constraints
  const cardWidthSize = (availableWidth - cardMargin * 2 * cols) / cols;
  const cardHeightSize = (availableHeight - cardMargin * 2 * rows) / rows;
  const cardSize = Math.min(cardWidthSize, cardHeightSize, 120); // Increased max size to 120

  return (
    <View style={styles.container}>
      <View style={[styles.grid, { width: availableWidth, padding: spacing.md }]}>
        {cards.map((card) => (
          <MemoryCard
            key={card.id}
            card={card}
            onPress={() => onCardPress(card.id)}
            size={cardSize}
            disabled={disabled}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
