import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors, typography, spacing, shadow } from '../../../theme';
import { formatScore } from '../../../utils/helpers';

interface GameUIProps {
  score: number;
  highScore: number;
  isPaused: boolean;
  onPause: () => void;
}

export const GameUI: React.FC<GameUIProps> = ({
  score,
  highScore,
  isPaused,
  onPause,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.scoreContainer}>
        <View style={styles.scoreBox}>
          <Text style={styles.scoreLabel}>Score</Text>
          <Text style={styles.scoreValue}>{formatScore(score, 4)}</Text>
        </View>

        {highScore > 0 && (
          <View style={styles.scoreBox}>
            <Text style={styles.scoreLabel}>Best</Text>
            <Text style={styles.highScoreValue}>{formatScore(highScore, 4)}</Text>
          </View>
        )}
      </View>

      <TouchableOpacity style={styles.pauseButton} onPress={onPause}>
        <Text style={styles.pauseText}>{isPaused ? '▶️' : '⏸️'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    paddingHorizontal: spacing.base,
    paddingTop: spacing.lg,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 10,
  },

  scoreContainer: {
    flexDirection: 'row',
    gap: spacing.md,
  },

  scoreBox: {
    backgroundColor: colors.background.primary,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: 12,
    ...shadow.sm,
  },

  scoreLabel: {
    fontSize: typography.fontSize.sm,
    color: colors.text.secondary,
    textAlign: 'center',
  },

  scoreValue: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.bold,
    color: colors.primary.green,
  },

  highScoreValue: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.bold,
    color: colors.secondary.orange,
  },

  pauseButton: {
    backgroundColor: colors.background.primary,
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    ...shadow.sm,
  },

  pauseText: {
    fontSize: 24,
  },
});
