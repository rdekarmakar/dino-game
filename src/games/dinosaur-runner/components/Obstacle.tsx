import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Obstacle as ObstacleType } from '../../../types';
import { colors } from '../../../theme';

interface ObstacleProps {
  obstacle: ObstacleType;
}

const getObstacleEmoji = (type: ObstacleType['type']): string => {
  switch (type) {
    case 'cactus':
      return '🌵';
    case 'rock':
      return '🪨';
    case 'pterodactyl':
      return '🦅';
    default:
      return '🌵';
  }
};

export const Obstacle: React.FC<ObstacleProps> = ({ obstacle }) => {
  return (
    <View
      style={[
        styles.obstacle,
        {
          left: obstacle.x,
          bottom: obstacle.y,
          width: obstacle.width,
          height: obstacle.height,
        },
      ]}
    >
      <Text style={styles.obstacleEmoji}>{getObstacleEmoji(obstacle.type)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  obstacle: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },

  obstacleEmoji: {
    fontSize: 35,
  },
});
