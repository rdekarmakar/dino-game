import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Dinosaur as DinosaurType } from '../../../types';
import { colors } from '../../../theme';

interface DinosaurProps {
  dinosaur: DinosaurType;
}

export const Dinosaur: React.FC<DinosaurProps> = ({ dinosaur }) => {
  return (
    <View
      style={[
        styles.dinosaur,
        {
          left: dinosaur.x,
          bottom: dinosaur.y,
          width: dinosaur.width,
          height: dinosaur.height,
        },
      ]}
    >
      <Text style={[styles.dinoEmoji, dinosaur.isDucking && styles.ducking]}>
        🦖
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  dinosaur: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },

  dinoEmoji: {
    fontSize: 50,
  },

  ducking: {
    fontSize: 40,
    transform: [{ scaleY: 0.6 }],
  },
});
