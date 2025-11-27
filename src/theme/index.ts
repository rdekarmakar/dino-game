// Main theme export file

import { colors, getDinosaurColor, hexToRgba } from './colors';
import { typography, getTextStyle, recommendedFonts } from './typography';
import { spacing, padding, margin, borderRadius, borderWidth, shadow, dimensions, zIndex, duration, opacity } from './spacing';

export const theme = {
  colors,
  typography,
  spacing,
  padding,
  margin,
  borderRadius,
  borderWidth,
  shadow,
  dimensions,
  zIndex,
  duration,
  opacity,
};

// Helper functions
export const helpers = {
  getDinosaurColor,
  hexToRgba,
  getTextStyle,
};

// Export individual modules
export { colors, typography, spacing, padding, margin, borderRadius, borderWidth, shadow, dimensions, zIndex, duration, opacity, recommendedFonts };

// Default theme
export default theme;
