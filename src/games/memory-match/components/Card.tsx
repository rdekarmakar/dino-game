import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Animated, View, Image } from 'react-native';
import { Card as CardType } from '../../../types';
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
        <View style={styles.dinoImageContainer}>
          <Image
            source={getDinoImage(card.dinosaurId)}
            style={styles.dinoImage}
            resizeMode="contain"
          />
        </View>
        {dinosaur && (
          <View style={styles.dinoInfoContainer}>
            <Text style={styles.dinoName} numberOfLines={2}>
              {dinosaur.name}
            </Text>
            <Text style={styles.dinoType} numberOfLines={1}>
              {dinosaur.type}
            </Text>
          </View>
        )}
      </Animated.View>
    </TouchableOpacity>
  );
};

// Helper function to get image source for dinosaur
const getDinoImage = (dinoId: string) => {
  const imageMap: Record<string, any> = {
    trex: require('../../../../assets/images/dinosaurs/trex.png'),
    triceratops: require('../../../../assets/images/dinosaurs/triceratops.png'),
    stegosaurus: require('../../../../assets/images/dinosaurs/stegosaurus.png'),
    brachiosaurus: require('../../../../assets/images/dinosaurs/brachiosaurus.png'),
    pterodactyl: require('../../../../assets/images/dinosaurs/pterodactyl.png'),
    velociraptor: require('../../../../assets/images/dinosaurs/velociraptor.png'),
    ankylosaurus: require('../../../../assets/images/dinosaurs/ankylosaurus.png'),
    parasaurolophus: require('../../../../assets/images/dinosaurs/parasaurolophus.png'),
    diplodocus: require('../../../../assets/images/dinosaurs/diplodocus.png'),
    spinosaurus: require('../../../../assets/images/dinosaurs/spinosaurus.png'),
    allosaurus: require('../../../../assets/images/dinosaurs/allosaurus.png'),
    iguanodon: require('../../../../assets/images/dinosaurs/iguanodon.png'),
  };
  return imageMap[dinoId] || require('../../../../assets/images/dinosaurs/dinosaur.png');
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

  dinoImageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: spacing.sm,
  },

  dinoImage: {
    width: '100%',
    height: '100%',
    maxWidth: 100,
    maxHeight: 100,
  },

  dinoInfoContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    width: '100%',
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.xs,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 36,
  },

  dinoName: {
    fontSize: 11,
    fontWeight: '700',
    color: colors.text.inverse,
    textAlign: 'center',
    letterSpacing: 0.5,
  },

  dinoType: {
    fontSize: 8,
    fontWeight: '600',
    color: colors.primary.lightGreen,
    textAlign: 'center',
    marginTop: 2,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
});
