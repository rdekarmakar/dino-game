import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, typography, spacing, borderRadius, shadow } from '../../../theme';
import { formatTime } from '../../../utils/helpers';

interface ScorePanelProps {
  moves: number;
  time: number;
  matchedPairs: number;
  totalPairs: number;
}

export const ScorePanel: React.FC<ScorePanelProps> = ({
  moves,
  time,
  matchedPairs,
  totalPairs,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.statBox}>
        <Text style={styles.statValue}>{moves}</Text>
        <Text style={styles.statLabel}>Moves</Text>
      </View>

      <View style={styles.statBox}>
        <Text style={styles.statValue}>{formatTime(time)}</Text>
        <Text style={styles.statLabel}>Time</Text>
      </View>

      <View style={styles.statBox}>
        <Text style={styles.statValue}>
          {matchedPairs}/{totalPairs}
        </Text>
        <Text style={styles.statLabel}>Pairs</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: spacing.base,
    paddingHorizontal: spacing.md,
    backgroundColor: colors.background.primary,
    borderRadius: borderRadius.base,
    marginHorizontal: spacing.base,
    marginVertical: spacing.md,
    ...shadow.sm,
  },

  statBox: {
    alignItems: 'center',
  },

  statValue: {
    fontSize: typography.fontSize['2xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.primary.green,
  },

  statLabel: {
    fontSize: typography.fontSize.base,
    color: colors.text.secondary,
    marginTop: spacing.xs,
  },
});
