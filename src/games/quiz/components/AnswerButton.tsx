import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { colors, typography, spacing, borderRadius, shadow } from '../../../theme';

interface AnswerButtonProps {
  answer: string;
  index: number;
  onPress: () => void;
  isSelected: boolean;
  isCorrect: boolean | null;
  showResult: boolean;
  disabled: boolean;
}

export const AnswerButton: React.FC<AnswerButtonProps> = ({
  answer,
  index,
  onPress,
  isSelected,
  isCorrect,
  showResult,
  disabled,
}) => {
  const letters = ['A', 'B', 'C', 'D'];

  const getButtonStyle = () => {
    if (showResult && isSelected) {
      return isCorrect ? styles.buttonCorrect : styles.buttonIncorrect;
    }
    if (isSelected) {
      return styles.buttonSelected;
    }
    return styles.button;
  };

  const getTextColor = () => {
    if (showResult && isSelected) {
      return colors.text.inverse;
    }
    if (isSelected) {
      return colors.text.inverse;
    }
    return colors.text.primary;
  };

  return (
    <TouchableOpacity
      style={[styles.container, getButtonStyle()]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
    >
      <View style={styles.letterContainer}>
        <Text style={[styles.letter, { color: getTextColor() }]}>{letters[index]}</Text>
      </View>
      <Text style={[styles.answerText, { color: getTextColor() }]} numberOfLines={2}>
        {answer}
      </Text>
      {showResult && isSelected && (
        <Text style={styles.resultIcon}>{isCorrect ? '✓' : '✗'}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.base,
    paddingHorizontal: spacing.md,
    marginHorizontal: spacing.base,
    marginVertical: spacing.sm,
    borderRadius: borderRadius.base,
    ...shadow.sm,
  },

  button: {
    backgroundColor: colors.background.primary,
    borderWidth: 2,
    borderColor: colors.ui.border,
  },

  buttonSelected: {
    backgroundColor: colors.secondary.orange,
    borderWidth: 2,
    borderColor: colors.secondary.darkOrange,
  },

  buttonCorrect: {
    backgroundColor: colors.status.success,
    borderWidth: 2,
    borderColor: colors.primary.darkGreen,
  },

  buttonIncorrect: {
    backgroundColor: colors.status.error,
    borderWidth: 2,
    borderColor: '#C62828',
  },

  letterContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.md,
  },

  letter: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.bold,
  },

  answerText: {
    flex: 1,
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.medium,
    lineHeight: 24,
  },

  resultIcon: {
    fontSize: typography.fontSize['2xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.text.inverse,
    marginLeft: spacing.sm,
  },
});
