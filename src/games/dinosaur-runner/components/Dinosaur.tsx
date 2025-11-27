import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Dinosaur as DinosaurType } from '../../../types';
import { colors } from '../../../theme';

interface DinosaurProps {
  dinosaur: DinosaurType;
}

export const Dinosaur: React.FC<DinosaurProps> = ({ dinosaur }) => {
  // Animation state - alternate between two running poses
  const [runningFrame, setRunningFrame] = useState(0);

  useEffect(() => {
    // Only animate when on the ground (not jumping)
    if (!dinosaur.isJumping) {
      const interval = setInterval(() => {
        setRunningFrame((prev) => (prev + 1) % 2);
      }, 150); // Switch frame every 150ms for running effect

      return () => clearInterval(interval);
    }
  }, [dinosaur.isJumping]);

  // Create a slight vertical bounce effect for running animation
  const runningBounce = !dinosaur.isJumping && runningFrame === 1 ? 2 : 0;

  return (
    <View
      style={[
        styles.dinosaur,
        {
          left: dinosaur.x,
          bottom: dinosaur.y + runningBounce,
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
    zIndex: 10, // Ensure dinosaur is visible above background
  },

  dinoEmoji: {
    fontSize: 50,
    transform: [{ scaleX: -1 }], // Flip horizontally to face right
  },

  ducking: {
    fontSize: 40,
    transform: [{ scaleX: -1 }, { scaleY: 0.6 }], // Flip horizontally and squash vertically
  },
});
