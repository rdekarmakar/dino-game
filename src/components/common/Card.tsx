import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { colors, spacing, borderRadius, shadow } from '../../theme';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'outlined';
  padding?: number;
  style?: ViewStyle;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  padding = spacing.base,
  style,
}) => {
  const cardStyles = [
    styles.card,
    styles[`card_${variant}`],
    { padding },
    style,
  ];

  return <View style={cardStyles}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    borderRadius: borderRadius.base,
    backgroundColor: colors.background.primary,
  },

  card_default: {
    ...shadow.sm,
  },

  card_elevated: {
    ...shadow.lg,
  },

  card_outlined: {
    borderWidth: 2,
    borderColor: colors.ui.border,
  },
});
