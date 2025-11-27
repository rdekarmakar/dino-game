import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, spacing, borderRadius } from '../../../theme';

interface ProgressBarProps {
  progress: number; // 0 to 1
  currentQuestion: number;
  totalQuestions: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  currentQuestion,
  totalQuestions,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.progressBarContainer}>
        <View style={[styles.progressBar, { width: `${progress * 100}%` }]} />
      </View>
      <View style={styles.footprints}>
        {Array.from({ length: totalQuestions }).map((_, index) => (
          <Text key={index} style={styles.footprint}>
            {index < currentQuestion ? '🦶' : '👣'}
          </Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.base,
    paddingVertical: spacing.md,
  },

  progressBarContainer: {
    height: 8,
    backgroundColor: colors.ui.border,
    borderRadius: borderRadius.full,
    overflow: 'hidden',
  },

  progressBar: {
    height: '100%',
    backgroundColor: colors.primary.green,
    borderRadius: borderRadius.full,
  },

  footprints: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: spacing.sm,
  },

  footprint: {
    fontSize: 16,
  },
});
