import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors } from '../../../theme';
import { RUNNER_GAME } from '../../../utils/constants';

export const Background: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Sky */}
      <View style={styles.sky} />

      {/* Ground */}
      <View style={styles.ground} />

      {/* Ground line */}
      <View style={styles.groundLine} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },

  sky: {
    flex: 1,
    backgroundColor: colors.game.sky,
  },

  ground: {
    height: RUNNER_GAME.GROUND_HEIGHT + 50,
    backgroundColor: colors.neutral.sand,
  },

  groundLine: {
    position: 'absolute',
    bottom: RUNNER_GAME.GROUND_HEIGHT + 50,
    left: 0,
    right: 0,
    height: 3,
    backgroundColor: colors.primary.brown,
  },
});
