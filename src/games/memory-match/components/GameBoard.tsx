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

const { width } = Dimensions.get('window');

export const GameBoard: React.FC<GameBoardProps> = ({
  cards,
  onCardPress,
  difficulty,
  disabled,
}) => {
  const gridSize = MEMORY_GAME.GRID_SIZES[difficulty.toUpperCase() as keyof typeof MEMORY_GAME.GRID_SIZES];
  const { rows, cols } = gridSize;

  // Calculate card size based on screen width and grid
  const cardMargin = spacing.xs * 2;
  const boardPadding = spacing.base * 2;
  const availableWidth = width - boardPadding;
  const cardSize = (availableWidth - cardMargin * cols) / cols;

  return (
    <View style={styles.container}>
      <View style={[styles.grid, { maxWidth: availableWidth }]}>
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
