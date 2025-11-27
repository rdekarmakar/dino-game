import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { QuizResult } from '../../../types';
import { Button, Card } from '../../../components/common';
import { colors, typography, spacing } from '../../../theme';
import { calculateAccuracy, getAchievementBadge } from '../../../utils/helpers';
import { getRandomFact } from '../data/dinoFacts';

interface ResultScreenProps {
  result: QuizResult;
  onPlayAgain: () => void;
  onGoHome: () => void;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({
  result,
  onPlayAgain,
  onGoHome,
}) => {
  const accuracy = calculateAccuracy(result.correctAnswers, result.totalQuestions);
  const badge = getAchievementBadge(accuracy);
  const randomFact = getRandomFact();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.emoji}>🎉</Text>
      <Text style={styles.title}>Quiz Complete!</Text>
      <Text style={styles.badge}>{badge}</Text>

      <Card variant="elevated" style={styles.statsCard}>
        <View style={styles.statRow}>
          <Text style={styles.statLabel}>Score:</Text>
          <Text style={styles.statValue}>{result.score} points</Text>
        </View>

        <View style={styles.statRow}>
          <Text style={styles.statLabel}>Correct Answers:</Text>
          <Text style={[styles.statValue, { color: colors.status.success }]}>
            {result.correctAnswers} / {result.totalQuestions}
          </Text>
        </View>

        <View style={styles.statRow}>
          <Text style={styles.statLabel}>Accuracy:</Text>
          <Text style={styles.statValue}>{accuracy}%</Text>
        </View>

        <View style={styles.statRow}>
          <Text style={styles.statLabel}>Time:</Text>
          <Text style={styles.statValue}>{result.timeElapsed}s</Text>
        </View>
      </Card>

      {/* Fun Fact */}
      <Card variant="outlined" style={styles.factCard}>
        <Text style={styles.factTitle}>🦴 Did You Know?</Text>
        <Text style={styles.factText}>{randomFact}</Text>
      </Card>

      {/* Buttons */}
      <View style={styles.buttons}>
        <Button
          title="Play Again"
          onPress={onPlayAgain}
          variant="primary"
          size="large"
          style={styles.button}
        />
        <Button
          title="Back to Menu"
          onPress={onGoHome}
          variant="outline"
          size="large"
          style={styles.button}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.tertiary,
  },

  content: {
    padding: spacing.lg,
    alignItems: 'center',
  },

  emoji: {
    fontSize: 100,
    marginVertical: spacing.base,
  },

  title: {
    fontSize: typography.fontSize['4xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.primary.green,
    marginBottom: spacing.sm,
  },

  badge: {
    fontSize: typography.fontSize['2xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.secondary.orange,
    marginBottom: spacing.lg,
  },

  statsCard: {
    width: '100%',
    marginBottom: spacing.lg,
  },

  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.ui.border,
  },

  statLabel: {
    fontSize: typography.fontSize.lg,
    color: colors.text.secondary,
    fontWeight: typography.fontWeight.medium,
  },

  statValue: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.bold,
    color: colors.primary.green,
  },

  factCard: {
    width: '100%',
    backgroundColor: colors.primary.lightGreen + '20',
    marginBottom: spacing.lg,
  },

  factTitle: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.bold,
    color: colors.primary.brown,
    marginBottom: spacing.sm,
  },

  factText: {
    fontSize: typography.fontSize.md,
    color: colors.text.primary,
    lineHeight: 24,
  },

  buttons: {
    width: '100%',
  },

  button: {
    marginBottom: spacing.md,
  },
});
