import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../../theme';
import { RUNNER_GAME } from '../../../utils/constants';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');
const GROUND_START = SCREEN_HEIGHT - RUNNER_GAME.GROUND_HEIGHT - 50;

export const Background: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Sky */}
      <View style={[styles.sky, { height: GROUND_START }]} />

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
    backgroundColor: colors.game.sky,
  },

  ground: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
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
