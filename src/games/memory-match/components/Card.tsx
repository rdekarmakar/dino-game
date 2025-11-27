import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Animated, View } from 'react-native';
import { Card as CardType, Dinosaur } from '../../../types';
import { colors, spacing, borderRadius, shadow } from '../../../theme';
import { getDinosaurById } from '../data/dinosaurs';

interface MemoryCardProps {
  card: CardType;
  onPress: () => void;
  size: number;
  disabled?: boolean;
}

export const MemoryCard: React.FC<MemoryCardProps> = ({ card, onPress, size, disabled }) => {
  const dinosaur = getDinosaurById(card.dinosaurId);
  const [flipAnim] = React.useState(new Animated.Value(0));

  React.useEffect(() => {
    Animated.timing(flipAnim, {
      toValue: card.isFlipped || card.isMatched ? 1 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [card.isFlipped, card.isMatched]);

  const frontInterpolate = flipAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  const backInterpolate = flipAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['180deg', '360deg'],
  });

  const frontOpacity = flipAnim.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [1, 0, 0],
  });

  const backOpacity = flipAnim.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 0, 1],
  });

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || card.isFlipped || card.isMatched}
      activeOpacity={0.8}
      style={[styles.cardContainer, { width: size, height: size }]}
    >
      {/* Card Back */}
      <Animated.View
        style={[
          styles.card,
          styles.cardBack,
          {
            opacity: frontOpacity,
            transform: [{ rotateY: frontInterpolate }],
          },
        ]}
      >
        <Text style={styles.cardBackEmoji}>🦕</Text>
        <Text style={styles.cardBackPattern}>🥚</Text>
      </Animated.View>

      {/* Card Front */}
      <Animated.View
        style={[
          styles.card,
          styles.cardFront,
          card.isMatched && styles.cardMatched,
          {
            opacity: backOpacity,
            transform: [{ rotateY: backInterpolate }],
          },
        ]}
      >
        <Text style={styles.dinoEmoji}>{getDinoEmoji(card.dinosaurId)}</Text>
        {card.isMatched && dinosaur && (
          <Text style={styles.dinoName} numberOfLines={1}>
            {dinosaur.name}
          </Text>
        )}
      </Animated.View>
    </TouchableOpacity>
  );
};

// Helper function to get emoji for dinosaur (simplified for now)
const getDinoEmoji = (dinoId: string): string => {
  const emojiMap: Record<string, string> = {
    trex: '🦖',
    triceratops: '🦕',
    stegosaurus: '🦕',
    brachiosaurus: '🦕',
    pterodactyl: '🦅',
    velociraptor: '🦖',
    ankylosaurus: '🦕',
    parasaurolophus: '🦕',
    diplodocus: '🦕',
    spinosaurus: '🦖',
    allosaurus: '🦖',
    iguanodon: '🦕',
  };
  return emojiMap[dinoId] || '🦕';
};

const styles = StyleSheet.create({
  cardContainer: {
    margin: spacing.xs,
  },

  card: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    borderRadius: borderRadius.md,
    justifyContent: 'center',
    alignItems: 'center',
    ...shadow.md,
  },

  cardBack: {
    backgroundColor: colors.game.cardBack,
    borderWidth: 3,
    borderColor: colors.primary.darkGreen,
  },

  cardBackEmoji: {
    fontSize: 32,
    marginBottom: spacing.xs,
  },

  cardBackPattern: {
    fontSize: 20,
    opacity: 0.6,
  },

  cardFront: {
    backgroundColor: colors.game.cardFront,
    borderWidth: 3,
    borderColor: colors.primary.green,
  },

  cardMatched: {
    backgroundColor: colors.game.matched,
    borderColor: colors.primary.darkGreen,
  },

  dinoEmoji: {
    fontSize: 48,
  },

  dinoName: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.text.inverse,
    marginTop: spacing.xs,
    textAlign: 'center',
  },
});
