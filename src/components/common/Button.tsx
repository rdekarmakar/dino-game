import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  ActivityIndicator,
} from 'react-native';
import { colors, typography, spacing, borderRadius, shadow } from '../../theme';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'danger';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  icon,
  style,
  textStyle,
}) => {
  const buttonStyles = [
    styles.button,
    styles[`button_${size}`],
    styles[`button_${variant}`],
    disabled && styles.button_disabled,
    style,
  ];

  const textStyles = [
    styles.text,
    styles[`text_${size}`],
    styles[`text_${variant}`],
    disabled && styles.text_disabled,
    textStyle,
  ];

  return (
    <TouchableOpacity
      style={buttonStyles}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.7}
    >
      {loading ? (
        <ActivityIndicator
          color={variant === 'outline' ? colors.primary.green : colors.text.inverse}
        />
      ) : (
        <>
          {icon}
          <Text style={textStyles}>{title}</Text>
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: borderRadius.base,
    ...shadow.md,
  },

  // Sizes
  button_small: {
    height: 40,
    paddingHorizontal: spacing.base,
  },
  button_medium: {
    height: 60,
    paddingHorizontal: spacing.xl,
  },
  button_large: {
    height: 72,
    paddingHorizontal: spacing['2xl'],
  },

  // Variants
  button_primary: {
    backgroundColor: colors.primary.green,
  },
  button_secondary: {
    backgroundColor: colors.secondary.orange,
  },
  button_outline: {
    backgroundColor: 'transparent',
    borderWidth: 3,
    borderColor: colors.primary.green,
  },
  button_danger: {
    backgroundColor: colors.accent.red,
  },

  button_disabled: {
    backgroundColor: colors.ui.disabled,
    opacity: 0.6,
  },

  // Text styles
  text: {
    fontWeight: typography.fontWeight.bold,
    textAlign: 'center',
  },

  text_small: {
    fontSize: typography.fontSize.md,
  },
  text_medium: {
    fontSize: typography.fontSize.xl,
  },
  text_large: {
    fontSize: typography.fontSize['2xl'],
  },

  text_primary: {
    color: colors.text.inverse,
  },
  text_secondary: {
    color: colors.text.inverse,
  },
  text_outline: {
    color: colors.primary.green,
  },
  text_danger: {
    color: colors.text.inverse,
  },

  text_disabled: {
    color: colors.text.disabled,
  },
});
