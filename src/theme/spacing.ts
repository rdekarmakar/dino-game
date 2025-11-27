// Spacing system for consistent layouts

export const spacing = {
  // Base spacing unit (4px)
  unit: 4,

  // Spacing scale (multiples of 4px)
  xs: 4,    // 4px
  sm: 8,    // 8px
  md: 12,   // 12px
  base: 16, // 16px
  lg: 20,   // 20px
  xl: 24,   // 24px
  '2xl': 32,  // 32px
  '3xl': 40,  // 40px
  '4xl': 48,  // 48px
  '5xl': 64,  // 64px
  '6xl': 80,  // 80px
  '7xl': 96,  // 96px
  '8xl': 128, // 128px
};

// Padding presets
export const padding = {
  none: 0,
  xs: spacing.xs,
  sm: spacing.sm,
  md: spacing.md,
  base: spacing.base,
  lg: spacing.lg,
  xl: spacing.xl,
  '2xl': spacing['2xl'],
  '3xl': spacing['3xl'],

  // Screen padding
  screen: {
    horizontal: spacing.base,
    vertical: spacing.lg,
  },

  // Card padding
  card: {
    horizontal: spacing.base,
    vertical: spacing.base,
  },

  // Button padding
  button: {
    horizontal: spacing.xl,
    vertical: spacing.md,
  },
};

// Margin presets
export const margin = {
  none: 0,
  xs: spacing.xs,
  sm: spacing.sm,
  md: spacing.md,
  base: spacing.base,
  lg: spacing.lg,
  xl: spacing.xl,
  '2xl': spacing['2xl'],
  '3xl': spacing['3xl'],
  '4xl': spacing['4xl'],
};

// Border radius
export const borderRadius = {
  none: 0,
  xs: 4,
  sm: 8,
  md: 12,
  base: 16,
  lg: 20,
  xl: 24,
  '2xl': 32,
  full: 9999, // Circle
};

// Border width
export const borderWidth = {
  none: 0,
  hairline: 1,
  thin: 2,
  base: 3,
  thick: 4,
  heavy: 6,
};

// Shadow/Elevation
export const shadow = {
  none: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 8,
  },
  xl: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.25,
    shadowRadius: 24,
    elevation: 12,
  },
};

// Layout dimensions
export const dimensions = {
  // Screen breakpoints (for responsive design)
  breakpoints: {
    mobile: 0,
    tablet: 768,
    desktop: 1024,
  },

  // Common sizes
  iconSize: {
    xs: 16,
    sm: 20,
    md: 24,
    base: 32,
    lg: 40,
    xl: 48,
    '2xl': 64,
    '3xl': 80,
  },

  // Button sizes
  buttonHeight: {
    sm: 36,
    md: 48,
    lg: 60,
    xl: 72,
  },

  // Card sizes
  cardWidth: {
    sm: 80,
    md: 100,
    lg: 120,
    xl: 150,
  },

  // Screen safe areas
  safeArea: {
    top: 44,
    bottom: 34,
  },

  // Game-specific dimensions
  game: {
    // Memory Match card sizes
    memoryCardSize: {
      easy: 100,
      medium: 90,
      hard: 75,
    },

    // Quiz answer button height
    quizButtonHeight: 60,

    // Runner game dimensions
    runnerDinoSize: 60,
    runnerObstacleSize: 50,
  },
};

// Z-index layers
export const zIndex = {
  base: 0,
  dropdown: 1000,
  sticky: 1100,
  overlay: 1200,
  modal: 1300,
  popover: 1400,
  toast: 1500,
};

// Animation durations (milliseconds)
export const duration = {
  fast: 150,
  base: 200,
  normal: 300,
  slow: 500,
  slower: 700,
  slowest: 1000,
};

// Opacity levels
export const opacity = {
  disabled: 0.4,
  hover: 0.8,
  pressed: 0.6,
  overlay: 0.5,
  transparent: 0,
  opaque: 1,
};
